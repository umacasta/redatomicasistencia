const PIXEL_ID = '1763727594255664';
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const origin = req.headers.origin, host = req.headers.host;
  if (!origin || !host || new URL(origin).host !== host) return res.status(403).json({ error: 'Invalid origin' });
  const eventId = req.body?.event_id;
  if (typeof eventId !== 'string' || !/^[a-zA-Z0-9-]{8,100}$/.test(eventId)) return res.status(400).json({ error: 'Invalid event' });
  const token = process.env.META_ACCESS_TOKEN;
  if (!token) return res.status(503).json({ error: 'Tracking unavailable' });
  const cookies = Object.fromEntries((req.headers.cookie || '').split(';').map(part => {const i=part.indexOf('=');return i<0?[]:[part.slice(0,i).trim(),part.slice(i+1)]}).filter(pair=>pair.length===2));
  const forwarded=req.headers['x-forwarded-for'];
  const ip=typeof forwarded==='string'?forwarded.split(',')[0].trim():req.socket?.remoteAddress;
  const user_data={client_user_agent:req.headers['user-agent']||''};
  if(ip)user_data.client_ip_address=ip;
  if(cookies._fbp)user_data.fbp=cookies._fbp;
  if(cookies._fbc)user_data.fbc=cookies._fbc;
  const event={event_name:'Contact',event_time:Math.floor(Date.now()/1000),event_id:eventId,action_source:'website',event_source_url:`${origin}/`,user_data};
  try {
    const response=await fetch(`https://graph.facebook.com/v25.0/${PIXEL_ID}/events`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:[event],access_token:token}),signal:AbortSignal.timeout(6000)});
    if(!response.ok){console.error('Meta CAPI failed',response.status);return res.status(502).json({error:'Meta rejected event'})}
    return res.status(200).json({ok:true});
  }catch(error){console.error('Meta CAPI request failed',error?.message);return res.status(502).json({error:'Tracking failed'})}
}

import { NextApiRequest, NextApiResponse } from 'next';
import { sendMetrics } from "../../lib/metrics/metric";

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  // send custom metrics to replicated metrics when sending prometheus metrics
  sendMetrics();
  res.status(201).end();
}

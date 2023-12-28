import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  message: string;
};

export default function email(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method === 'POST') {
    // Process a POST request
    res.status(200).json({ message: 'Hello from Next.js!' });
  } else {
    // Handle any other HTTP method
  }
}

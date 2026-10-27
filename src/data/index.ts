import mcqs from './mcqs.json' with { type: 'json' };
import mcqs1 from './mcqs1.json' with { type: 'json' };
import mcqsBatch50 from './mcqs_batch_50.json' with { type: 'json' };

export const allMcqs = [
  ...((mcqs as any[]) || []),
  ...((mcqs1 as any[]) || []),
  ...((mcqsBatch50 as any[]) || [])
];

export default allMcqs;

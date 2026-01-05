import React from 'react';
import { Gift, Star, CheckCircle } from 'lucide-react';

type Reward = {
  id: number;
  description: string;
  pointsRequired: number;
  icon: JSX.Element;
};

const mockRewards: Reward[] = [
  {
    id: 1,
    description: 'Free Margherita Pizza',
    pointsRequired: 100,
    icon: <Gift className="w-6 h-6 text-green-400" />,
  },
  {
    id: 2,
    description: '20% Off on Next Order',
    pointsRequired: 50,
    icon: <Star className="w-6 h-6 text-yellow-400" />,
  },
  {
    id: 3,
    description: 'Free Drink with Any Pizza',
    pointsRequired: 30,
    icon: <CheckCircle className="w-6 h-6 text-blue-400" />,
  },
];

const LoyaltyRewards: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-zinc-800 to-slate-700 shadow-lg rounded-lg text-white">
      <h2 className="text-2xl font-bold mb-4">Loyalty Rewards</h2>
      <ul className="space-y-4">
        {mockRewards.map((reward) => (
          <li key={reward.id} className="flex items-center space-x-4">
            {reward.icon}
            <div>
              <p className="text-lg font-semibold">{reward.description}</p>
              <p className="text-sm text-gray-400">{reward.pointsRequired} Points</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LoyaltyRewards;
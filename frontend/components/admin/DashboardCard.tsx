import { cn } from '@/lib/utils';

interface DashboardCardProps {
  title: string;
  value: number;
  icon: string;
  color: string;
}

export function DashboardCard({ title, value, icon, color }: DashboardCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center">
        <div className={cn('text-3xl p-4 rounded-full mr-4', color)}>
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-500">{title}</h3>
          <p className="text-3xl font-bold">{value}</p>
        </div>
      </div>
    </div>
  );
}

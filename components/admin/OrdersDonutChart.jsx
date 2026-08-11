'use client'

import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts'

const OrdersDonutChart = ({ pending = 58, shipped = 128, delivered = 248 }) => {
  const data = [
    { name: 'Pending', value: pending, color: '#fbbf24' },
    { name: 'Shipped', value: shipped, color: '#3b82f6' },
    { name: 'Delivered', value: delivered, color: '#10b981' },
  ]

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={100}
          paddingAngle={2}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip 
          contentStyle={{
            backgroundColor: '#1e293b',
            border: '1px solid #475569',
            borderRadius: '8px',
            color: '#f1f5f9'
          }}
        />
        <Legend 
          verticalAlign="bottom" 
          height={36}
          formatter={(value, entry) => (
            <span style={{ color: '#64748b', fontSize: '12px' }}>
              {value}: {entry.payload.value}
            </span>
          )}
        />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default OrdersDonutChart

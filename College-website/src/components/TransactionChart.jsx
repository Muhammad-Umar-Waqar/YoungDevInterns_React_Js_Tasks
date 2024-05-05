import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
	{
		name: 'semester 1',
		GPA: 3.7
	},
	{
		name: 'semester 2',
		GPA: 2.4
	},
	{
		name: 'semester 3',
		GPA: 3.5
	},
	{
		name: 'semester 4',
		GPA: 2.8
	},
	{
		name: 'semester 5',
		GPA: 2.0
	},
	{
		name: 'semester 6',
		GPA: 3.2
	},
	{
		name: 'semester 7',
		GPA: 4.0
	},
	{
		name: 'semester 8',
		GPA: 3.5
	},
]

export default function TransactionChart() {
	return (
		<div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
			<strong className="text-gray-700 font-medium">GPA</strong>
			<div className="mt-3 w-full flex-1 text-xs">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart
						width={500}
						height={300}
						data={data}
						margin={{
							top: 20,
							right: 10,
							left: -10,
							bottom: 0
						}}
					>
						<CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="GPA" fill="#0ea5e9" />
						
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}

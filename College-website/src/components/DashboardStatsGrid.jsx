import React from 'react'
import { IoBagHandle, IoPieChart, IoPeople, IoCart } from 'react-icons/io5'

export default function DashboardStatsGrid() {
	return (
		<div className="flex gap-4">
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-blue-400">
					<img src="./images/balance.svg" alt="" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Current Balance</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">0.0</strong>
						
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-300">
					<img src="./images/courses.svg" alt="" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Registered Courses</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">9</strong>
						
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-gray-300">
					<img src="./images/cgpa.svg" alt="" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">CGPA</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">3.71</strong>
						<span className="text-sm text-red-500 pl-2"></span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-400">
					<img src="./images/message.svg" alt="" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Average Attendance</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">90%</strong>
						<span className="text-sm text-red-500 pl-2"></span>
					</div>
				</div>
			</BoxWrapper>
		</div>
	)
}

function BoxWrapper({ children }) {
	return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}

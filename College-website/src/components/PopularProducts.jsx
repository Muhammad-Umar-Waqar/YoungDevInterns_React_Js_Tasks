import classNames from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'

const popularProducts = [
	{
		id: '3432',
		product_name: 'Sem. 1',
		product_thumbnail: './images/cp.webp',
		product_price: '19600',
		passed: 341
	},
	{
		id: '7633',
		product_name: 'Sem. 2',
		product_thumbnail: './images/cir.png',
		product_price: '120600',
		passed: 24
	},
	{
		id: '6534',
		product_name: 'Sem. 3',
		product_thumbnail: './images/dsa.jpg',
		product_price: '19600',
		passed: 56
	},
	{
		id: '9234',
		product_name: 'Sem. 4',
		product_thumbnail: './images/ai.jpeg',
		product_price: '100000',
		passed: 98
	},
	{
		id: '4314',
		product_name: 'Sem. 5',
		product_thumbnail: './images/cloud.jpeg',
		product_price: '190000',
		passed: 0
	},
	{
		id: '4342',
		product_name: 'Sem. 6',
		product_thumbnail: './images/aws.png',
		product_price: '19600',
		passed: 453
	}
]

function PopularProducts() {
	return (
		<div className="w-[20rem] bg-white p-4 rounded-sm border border-gray-200">
			<strong className="text-gray-700 font-medium">Popular Products</strong>
			<div className="mt-4 flex flex-col gap-3">
				{popularProducts.map((product) => (
					<Link
						key={product.id}
						to={`/product/${product.id}`}
						className="flex items-start hover:no-underline"
					>
						<div className="w-10 h-10 min-w-[2.5rem] bg-gray-200 rounded-sm">
							<img
								className="w-full h-full object-cover rounded-sm"
								src={product.product_thumbnail}
								alt={product.product_name}
							/>
						</div>
						<div className="ml-4 flex-1">
							<p className="text-sm text-gray-800">{product.product_name}</p>
							<span
								className={classNames(
									product.passed === 0
										? 'text-red-500'
										: product.passed > 50
										? 'text-green-500'
										: 'text-orange-500',
									'text-xs font-medium'
								)}
							>
								{product.passed === 0 ? 'Paid' : ' Not Paid'}
							</span>
						</div>
						<div className="text-xs text-gray-400 pl-1.5">{product.product_price}</div>
					</Link>
				))}
			</div>
		</div>
	)
}

export default PopularProducts

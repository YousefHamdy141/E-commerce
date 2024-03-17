import { FunctionComponent } from 'react'

import { CurrencyFormatter } from '../CurrencyFormatter'
import './TotalPrice.scss'

interface Props {
    amount: number
}

export const TotalPrice: FunctionComponent<Props> = ({ amount }) => {
    return <div className="totalPrice">Total: {<CurrencyFormatter amount={amount} />}</div>
}

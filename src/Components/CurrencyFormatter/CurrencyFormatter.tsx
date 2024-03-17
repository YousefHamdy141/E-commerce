import { FunctionComponent } from 'react'
interface Props {
    amount: number
}

export const CurrencyFormatter: FunctionComponent<Props> = ({ amount }) => {
    const formattedAmount = amount.toLocaleString('en-GB', {
        style: 'currency',
        currency: 'GBP'
    })

    return <span className="currency">{formattedAmount}</span>
}

import Loan from "../../domain/Loan"

export default class GetLoansAvailable {

    constructor() {}

    execute(input: Input) {
        const loans = new Loan()
        const result = loans.setLoansModality(input.income, input.age, input.location)
        const outputDTO: Output = {
            customer: input.name,
            loans: result
        }
        return outputDTO
    }
}

type Input = {
    age: number,
    cpf: string,
    name: string,
    income: number,
    location: string
}

type Output = {
    customer: string,
    loans: Array<{
        type: 'PERSONAL' | 'GUARANTEED' | 'CONSIGNMENT',
        interest_rate: number
    }>
}
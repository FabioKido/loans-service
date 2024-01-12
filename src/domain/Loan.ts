export default class Loan {

    constructor() {}

    setLoansModality(income: number, age: number, location: string) {
        const loans: LoanType[] = []

        if(income <= 3000 || (income >= 3000 && income <= 5000) || (age < 30 && location === 'SP')) {
            loans.push({
                type: 'PERSONAL',
                interest_rate: 4
            })
        }

        if(income <= 3000 || (income >= 3000 && income <= 5000) || (age < 30 && location === 'SP')) {
            loans.push({
                type: 'GUARANTEED',
                interest_rate: 3
            })
        }
        
        if(income >= 5000) {
            loans.push({
                type: 'CONSIGNMENT',
                interest_rate: 2
            })
        }
        
        return loans
    }
}

type LoanType = {
    type: 'PERSONAL' | 'GUARANTEED' | 'CONSIGNMENT',
    interest_rate: number
}
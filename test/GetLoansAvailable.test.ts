import GetLoansAvailable from "../src/application/UseCase/GetLoansAvailable";

test.only('deve receber informação de modalidades de empréstimos disponíveis', async ( ) => {
    const customerDTO = {
        "age": 26,
        "cpf": "275.484.389-23",
        "name": "Vuxaywua Zukiagou",
        "income": 7000.00,
        "location": "SP"
    }

    const getLoansAvailable = new GetLoansAvailable()
    const data = getLoansAvailable.execute(customerDTO)

    expect(data.customer).toBe("Vuxaywua Zukiagou")
    expect(data.loans).toHaveLength(3)
    expect(data.loans[0].type).toBe("PERSONAL")
    expect(data.loans[0].interest_rate).toBe(4)
})
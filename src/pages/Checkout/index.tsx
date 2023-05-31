import { useState } from 'react'
import Button from '../../components/Button'
import Card from '../../components/Card'
import { Column, Row, TabButton } from './styles'
import barcode from '../../assets/images/barcode.png'
import creditCard from '../../assets/images/credit-card.png'

const Checkout = () => {
  const [payCard, setPayCard] = useState(false)

  return (
    <div className="container">
      <Card title="Dados de cobrança">
        <>
          <Row>
            <Column>
              <label htmlFor="fullName">Nome completo</label>
              <input id="fullName" type="text" />
            </Column>
            <Column>
              <label htmlFor="email">E-mail</label>
              <input id="email" type="email" />
            </Column>
            <Column>
              <label htmlFor="cpf">CPF</label>
              <input id="cpf" type="text" />
            </Column>
          </Row>
          <h3 className="marginTop">Dados de entrega - conteúdo digital</h3>
          <Row>
            <Column>
              <label htmlFor="deliveryEmail">E-mail</label>
              <input id="deliveryEmail" type="email" />
            </Column>
            <Column>
              <label htmlFor="confirmDeliveryEmail">Confirme o e-mail</label>
              <input id="confirmDeliveryEmail" type="email" />
            </Column>
          </Row>
        </>
      </Card>

      <Card title="Pagamento">
        <>
          <TabButton isActive={!payCard} onClick={() => setPayCard(false)}>
            <img src={barcode} alt="" />
            Boleto bancário
          </TabButton>
          <TabButton isActive={payCard} onClick={() => setPayCard(true)}>
            <img src={creditCard} alt="" />
            Cartão de crédito
          </TabButton>
          <div className="marginTop">
            {payCard ? (
              <>
                <Row>
                  <Column>
                    <label htmlFor="cardOwner">Nome do titular do cartão</label>
                    <input id="cardOwner" type="text" />
                  </Column>
                  <Column>
                    <label htmlFor="cpfCardOwner">
                      CPF do titular do cartão
                    </label>
                    <input id="cpfCardOwner" type="text" />
                  </Column>
                </Row>
                <Row marginTop="16px">
                  <Column>
                    <label htmlFor="cardDisplayName">Nome no cartão</label>
                    <input id="cardDisplayName" type="text" />
                  </Column>
                  <Column>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <input id="cardNumber" type="text" />
                  </Column>
                  <Column maxWidth="123px">
                    <label htmlFor="expiryMonth">Mês do vencimento</label>
                    <input id="expiryMonth" type="text" />
                  </Column>
                  <Column maxWidth="123px">
                    <label htmlFor="expiryYear">Ano de vencimento</label>
                    <input id="expiryYear" type="text" />
                  </Column>
                  <Column maxWidth="48px">
                    <label htmlFor="cardCode">CVV</label>
                    <input id="cardCode" type="text" />
                  </Column>
                </Row>
                <Row marginTop="16px">
                  <Column maxWidth="150px">
                    <label htmlFor="installments">Parcelamento</label>
                    <select>
                      <option>1x de R$ 200,00</option>
                      <option>1x de R$ 200,00</option>
                      <option>1x de R$ 200,00</option>
                    </select>
                  </Column>
                </Row>
              </>
            ) : (
              <p>
                Ao optar por essa forma de pagamento, é importante lembrar que a
                confirmação pode levar até 3 dias úteis, devido aos prazos
                estabelecidos pelas instituições financeiras. Portanto, a
                liberação do código de ativação do jogo adquirido ocorrerá
                somente após a aprovação do pagamento do boleto.
              </p>
            )}
          </div>
        </>
      </Card>

      <Button type="button" title="Clique aqui para finalizar a compra">
        Finalizar compra
      </Button>
    </div>
  )
}

export default Checkout

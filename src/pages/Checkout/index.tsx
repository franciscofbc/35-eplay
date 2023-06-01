import { useState } from 'react'
import Button from '../../components/Button'
import Card from '../../components/Card'
import { Column, Row, TabButton } from './styles'
import barcode from '../../assets/images/barcode.png'
import creditCard from '../../assets/images/credit-card.png'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Checkout = () => {
  const [payCard, setPayCard] = useState(false)

  const form = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      cpf: '',
      deliveryEmail: '',
      confirmDeliveryEmail: '',
      cardOwner: '',
      cpfCardOwner: '',
      cardDisplayName: '',
      cardNumber: '',
      expiryMonth: '',
      expiryYear: '',
      cardCode: '',
      installments: 1
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      email: Yup.string()
        .email('E-mail invalido')
        .required('O campo é obrigatório'),
      cpf: Yup.string()
        .min(14, 'O campo precisa ter 14 caracteres')
        .max(14, 'O campo precisa ter 14 caracteres')
        .required('O campo é obrigatório'),
      deliveryEmail: Yup.string()
        .email('E-mail invalido')
        .required('O campo é obrigatório'),
      confirmDeliveryEmail: Yup.string()
        .oneOf([Yup.ref('deliveryEmail')], 'Os e-mails são diferentes')
        .required('O campo é obrigatório'),

      cardOwner: Yup.string().when((values, schema) =>
        payCard ? schema.required('O campo é obrigatório') : schema
      ),
      cpfCardOwner: Yup.string().when((values, schema) =>
        payCard ? schema.required('O campo é obrigatório') : schema
      ),
      cardDisplayName: Yup.string().when((values, schema) =>
        payCard ? schema.required('O campo é obrigatório') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        payCard ? schema.required('O campo é obrigatório') : schema
      ),
      expiryMonth: Yup.string().when((values, schema) =>
        payCard ? schema.required('O campo é obrigatório') : schema
      ),
      expiryYear: Yup.string().when((values, schema) =>
        payCard ? schema.required('O campo é obrigatório') : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        payCard ? schema.required('O campo é obrigatório') : schema
      ),
      installments: Yup.string().when((values, schema) =>
        payCard ? schema.required('O campo é obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    if (isTouched && isInvalid) return message
    return ''
  }

  return (
    <form onSubmit={form.handleSubmit} className="container">
      <Card title="Dados de cobrança">
        <>
          <Row>
            <Column>
              <label htmlFor="fullName">Nome completo</label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                value={form.values.fullName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('fullName', form.errors.fullName)}</small>
            </Column>
            <Column>
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                type="email"
                name="email"
                value={form.values.email}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('email', form.errors.email)}</small>
            </Column>
            <Column>
              <label htmlFor="cpf">CPF</label>
              <input
                id="cpf"
                type="text"
                name="cpf"
                value={form.values.cpf}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('cpf', form.errors.cpf)}</small>
            </Column>
          </Row>
          <h3 className="marginTop">Dados de entrega - conteúdo digital</h3>
          <Row>
            <Column>
              <label htmlFor="deliveryEmail">E-mail</label>
              <input
                id="deliveryEmail"
                type="email"
                name="deliveryEmail"
                value={form.values.deliveryEmail}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage('deliveryEmail', form.errors.deliveryEmail)}
              </small>
            </Column>
            <Column>
              <label htmlFor="confirmDeliveryEmail">Confirme o e-mail</label>
              <input
                id="confirmDeliveryEmail"
                type="email"
                name="confirmDeliveryEmail"
                value={form.values.confirmDeliveryEmail}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage(
                  'confirmDeliveryEmail',
                  form.errors.confirmDeliveryEmail
                )}
              </small>
            </Column>
          </Row>
        </>
      </Card>

      <Card title="Pagamento">
        <>
          <TabButton
            isActive={!payCard}
            onClick={() => setPayCard(false)}
            type="button"
          >
            <img src={barcode} alt="" />
            Boleto bancário
          </TabButton>
          <TabButton
            isActive={payCard}
            onClick={() => setPayCard(true)}
            type="button"
          >
            <img src={creditCard} alt="" />
            Cartão de crédito
          </TabButton>
          <div className="marginTop">
            {payCard ? (
              <>
                <Row>
                  <Column>
                    <label htmlFor="cardOwner">Nome do titular do cartão</label>
                    <input
                      id="cardOwner"
                      type="text"
                      name="cardOwner"
                      value={form.values.cardOwner}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage('cardOwner', form.errors.cardOwner)}
                    </small>
                  </Column>
                  <Column>
                    <label htmlFor="cpfCardOwner">
                      CPF do titular do cartão
                    </label>
                    <input
                      id="cpfCardOwner"
                      type="text"
                      name="cpfCardOwner"
                      value={form.values.cpfCardOwner}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage(
                        'cpfCardOwner',
                        form.errors.cpfCardOwner
                      )}
                    </small>
                  </Column>
                </Row>
                <Row marginTop="16px">
                  <Column>
                    <label htmlFor="cardDisplayName">Nome no cartão</label>
                    <input
                      id="cardDisplayName"
                      type="text"
                      name="cardDisplayName"
                      value={form.values.cardDisplayName}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage(
                        'cardDisplayName',
                        form.errors.cardDisplayName
                      )}
                    </small>
                  </Column>
                  <Column>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <input
                      id="cardNumber"
                      type="text"
                      name="cardNumber"
                      value={form.values.cardNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage('cardNumber', form.errors.cardNumber)}
                    </small>
                  </Column>
                  <Column maxWidth="123px">
                    <label htmlFor="expiryMonth">Mês do vencimento</label>
                    <input
                      id="expiryMonth"
                      type="text"
                      name="expiryMonth"
                      value={form.values.expiryMonth}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage('expiryMonth', form.errors.expiryMonth)}
                    </small>
                  </Column>
                  <Column maxWidth="123px">
                    <label htmlFor="expiryYear">Ano de vencimento</label>
                    <input
                      id="expiryYear"
                      type="text"
                      name="expiryYear"
                      value={form.values.expiryYear}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage('expiryYear', form.errors.expiryYear)}
                    </small>
                  </Column>
                  <Column maxWidth="48px">
                    <label htmlFor="cardCode">CVV</label>
                    <input
                      id="cardCode"
                      type="text"
                      name="cardCode"
                      value={form.values.cardCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage('cardCode', form.errors.cardCode)}
                    </small>
                  </Column>
                </Row>
                <Row marginTop="16px">
                  <Column maxWidth="150px">
                    <label htmlFor="installments">Parcelamento</label>
                    <select
                      id="installments"
                      name="installments"
                      value={form.values.installments}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    >
                      <option>1x de R$ 200,00</option>
                      <option>1x de R$ 200,00</option>
                      <option>1x de R$ 200,00</option>
                    </select>
                    <small>
                      {getErrorMessage(
                        'installments',
                        form.errors.installments
                      )}
                    </small>
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

      {/* <Button type="button" title="Clique aqui para finalizar a compra">
        Finalizar compra
      </Button> */}
      <button type="submit">teste</button>
    </form>
  )
}

export default Checkout

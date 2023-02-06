import "./style.scss"

export const Error = ({code, message}) => {
    return <div>Error {code}<br/>{message}</div>
}
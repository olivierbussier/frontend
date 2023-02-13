import "./style.scss"

export const Error = ({code, message}) => {
    return <div className="error-message">Error {code}<br/>{message}</div>
}
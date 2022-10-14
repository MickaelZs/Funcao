import { Link } from "react-router-dom";

export default function Index() {
    return (
        <main>
            <h1>Home</h1>
            <ul>
                <li>            <Link to='/Acai'>Açai</Link>
                </li>
                <li>            <Link to='/abastecimento'>abastecimento</Link>
                </li>
                <li>            <Link to='/febre'>febre</Link>
                </li>
                <li>            <Link to='/orcamento'>orcamento</Link>
                </li>
                <li>            <Link to='/salario'>salario</Link>
                </li>
                <li>            <Link to='/signo'>signo</Link>
                </li>
                <li>            <Link to='/sorveteria'>sorveteria</Link>
                </li>
                <li>            <Link to='/compra'>compra</Link>
                </li>
            </ul>

        </main>
    );
}
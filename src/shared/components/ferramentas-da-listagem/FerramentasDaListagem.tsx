import { Box, Button, Icon, Paper, TextField, useTheme } from "@mui/material";
import React from "react";

interface IBarraDeFerramentasDaListagemProps {
    textoDaBusca?: string;
    mostrarInputBusca?: boolean;
    aoMudarTextoDeBusca?: (novotexto: string) => void;

    textoBotaoNovo?: string;
    mostrarBotaoNovo?: boolean;
    aoClicarEmNovo?: () => void;


}

export const FerramentasDaListagem: React.FC<IBarraDeFerramentasDaListagemProps> = ({
    textoDaBusca = '',
    mostrarInputBusca = false,
    aoMudarTextoDeBusca,
    mostrarBotaoNovo = true,
    aoClicarEmNovo,
    textoBotaoNovo = 'Novo',
}) => {

    const theme = useTheme();

    return (
        <Box
            height={theme.spacing(5)}
            marginX={1}
            padding={1}
            paddingX={2}
            display="flex"
            gap={1}
            alignItems="center" 
            component={Paper}>
            {mostrarInputBusca && (
                <TextField
                    size="small"
                    placeholder="Pesquisar..."
                    value={textoDaBusca}
                    onChange={(e) => aoMudarTextoDeBusca?.(e.target.value)} />
            )}

            <Box flex={1} display="flex" justifyContent="end">
                {mostrarBotaoNovo &&(
                    <Button 
                    variant='contained' 
                    color='primary' 
                    disableElevation
                    onClick={aoClicarEmNovo} 
                    endIcon={<Icon>add</Icon>}>{textoBotaoNovo}</Button>
                )}
            </Box>
        </Box>
    )
}

export default FerramentasDaListagem

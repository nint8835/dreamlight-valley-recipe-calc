import { AppNavBar } from 'baseui/app-nav-bar';
import { Block } from 'baseui/block';
import { Card, StyledBody, StyledTitle } from 'baseui/card';
import { StyledDivider } from 'baseui/divider';
import { FormControl } from 'baseui/form-control';
import { CheckIndeterminate } from 'baseui/icon';
import { Input } from 'baseui/input';
import { ListItem, ListItemLabel } from 'baseui/list';
import { Table } from 'baseui/table-semantic';
import { useState } from 'react';
import { useStyletron } from 'styletron-react';

const ingredientCosts = {
    butter: 190,
    cheese: 180,
    egg: 220,
    milk: 230,
};

function App() {
    const [css] = useStyletron();

    const [initialInvestmentStr, setInitialInvestmentStr] = useState('');

    const investmentAmountInt = parseInt(initialInvestmentStr) || 0;

    const souffleUnitCost =
        ingredientCosts.butter + ingredientCosts.cheese + ingredientCosts.egg + ingredientCosts.milk;
    const souffleCount = Math.floor(investmentAmountInt / souffleUnitCost);

    return (
        <Block
            color="contentPrimary"
            backgroundColor="backgroundPrimary"
            width={'100vw'}
            height={'100vh'}
            overflow={'auto'}
        >
            <AppNavBar title="Dreamlight Valley Recipe Calculator" />
            <Block padding="1.5rem">
                <Card>
                    <StyledTitle>Soufflé</StyledTitle>
                    <StyledBody>
                        <FormControl
                            label={() => 'Initial investment'}
                            caption={() => 'Number of Star Coins to invest into purchasing ingredients'}
                        >
                            <Input
                                type="number"
                                value={initialInvestmentStr}
                                onChange={(e) => setInitialInvestmentStr(e.target.value)}
                            />
                        </FormControl>
                        <StyledDivider />
                        <Table
                            columns={['Ingredient', 'Quantity', 'Unit Cost', 'Total Cost']}
                            data={[
                                ['Butter', souffleCount, ingredientCosts.butter, ingredientCosts.butter * souffleCount],
                                ['Cheese', souffleCount, ingredientCosts.cheese, ingredientCosts.cheese * souffleCount],
                                ['Egg', souffleCount, ingredientCosts.egg, ingredientCosts.egg * souffleCount],
                                ['Milk', souffleCount, ingredientCosts.milk, ingredientCosts.milk * souffleCount],
                            ]}
                        />
                        <StyledDivider />
                        <ul className={css({ paddingLeft: 0, paddingRight: 0 })}>
                            <ListItem artwork={(props) => <CheckIndeterminate {...props} />}>
                                <ListItemLabel description={`${souffleCount} soufflés`}>Soufflé Count</ListItemLabel>
                            </ListItem>
                            <ListItem artwork={(props) => <CheckIndeterminate {...props} />}>
                                <ListItemLabel description={`${1200 * souffleCount} Star Coins`}>
                                    Sale Value
                                </ListItemLabel>
                            </ListItem>
                            <ListItem artwork={(props) => <CheckIndeterminate {...props} />}>
                                <ListItemLabel description={`${(1200 - souffleUnitCost) * souffleCount} Star Coins`}>
                                    Profit
                                </ListItemLabel>
                            </ListItem>
                        </ul>
                    </StyledBody>
                </Card>
            </Block>
        </Block>
    );
}

export default App;

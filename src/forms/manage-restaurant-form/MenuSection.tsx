import { useFieldArray, useFormContext } from 'react-hook-form'
import { FormDescription, FormField, FormItem } from '../../components/ui/form'
import { Button } from '../../components/ui/button'
import { MenuItemInput } from './MenuItemInput'


export default function MenuSection() {

    const { control } = useFormContext()

    //field -- array of all the current list of menu items
    const { fields, append, remove } = useFieldArray({
        control,
        name: "menuItems",
    })
    return (
        <div className='space-y-2'>
            <div className=''>
                <h2 className='text-2xl font-bold'>
                    Menu
                </h2>
                <FormDescription>
                    Create your menu and give each item a name and a price
                </FormDescription>
            </div>
            <FormField control={control} name='menuItems' render={() => (
                <FormItem className='flex flex-col gap-2'>
                    {fields.map((_, index) => (
                        <MenuItemInput index={index} removeMenuItem={() => remove(index)} />
                    ))}
                </FormItem>
            )} />
            <Button type="button" onClick={() => append({ name: "", price: "" })}>
                Add Menu Item
            </Button>
        </div>
    )
}

export const updateObject = (oldobject,updatedProperties) =>{
    return {
        ...oldobject,
        ...updatedProperties
    }
}

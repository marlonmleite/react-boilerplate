export const Types = {
  SET_NAME: 'EXAMPLE/SET_NAME',
  LOAD_NAME: 'EXAMPLE/LOAD_NAME',
}

export const Actions = {
  setName: name => ({ type: Types.SET_NAME, name }),
  load: () => ({ type: Types.LOAD_NAME }),
}

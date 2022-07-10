import {
  config,
  Module,
  Mutation,
  VuexModule,
  Action,
} from 'vuex-module-decorators';
import { user } from '@/typings/TypeUser.d';

config.rawError = true;
@Module({
  namespaced: true,
})
export default class UserStore extends VuexModule {
  users:user[] = [
    {
      id: 41654,
      name: 'Adrian Ortiz Martinez',
      card: 45641321654,
      balance: 4654321,
      isActive: false,
    },
    {
      id: 465419849,
      name: 'Luis Miranda Mejia',
      card: 465165498,
      balance: 1231,
      isActive: false,
    },
    {
      id: 15649816,
      name: 'Karen Olver Mendoza',
      card: 4121654564,
      balance: 4412,
      isActive: false,
    },
  ]

  user: user[] = []

  get filterByName() {
    // eslint-disable-next-line max-len
    return (search: string): user[] => this.users.filter(({ name }) => name.toLowerCase().indexOf(search.toLowerCase()) > -1);
  }

  @Mutation
  CREATE_USER(payload: user) {
    this.users = [...this.users, payload];
  }

  @Mutation
  GET_USER(payload: number) {
    this.user = this.users.filter(({ id }) => id === payload);
  }

  @Mutation
  UPDATE_USER(payload: user) {
    const id = this.users.map((e: user) => e.id).indexOf(payload.id);
    this.users[id] = payload;
  }

  @Mutation
  DELETE_USER(payload: user) {
    this.users = this.users.filter(({ id }) => id !== payload.id);
  }

  @Mutation
  UPDATE_ACTIVE(payload: number) {
    const id = this.users.map((e: user) => e.id).indexOf(payload);
    this.users[id].isActive = !this.users[id].isActive;
  }

  @Action
  createUser(newUser: user) {
    this.context.commit('CREATE_USER', newUser);
  }

  @Action
  getUser(getUser: user) {
    this.context.commit('GET_USER', getUser);
  }

  @Action
  deleteUser(userToDelete: user) {
    this.context.commit('DELETE_USER', userToDelete);
  }

  @Action
  updateUser(userUpdate: user) {
    this.context.commit('UPDATE_USER', userUpdate);
  }

  @Action
  updateActive(idUser: number) {
    this.context.commit('UPDATE_ACTIVE', idUser);
  }
}

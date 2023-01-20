export default function ({ store, redirect }: any) {
  // If the user is not authenticated
  if (!store.getters['auth/isAuthenticated']) {
    return redirect('/login')
  }
}

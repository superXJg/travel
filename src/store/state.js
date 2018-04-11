let defaultCity
try {
  defaultCity = localStorage.city || '厦门'
} catch (e) {}
export default {
  city: defaultCity
}

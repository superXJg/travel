let defaultCity = '厦门'
try {
  defaultCity = localStorage.city
} catch (e) {}
export default {
  city: defaultCity
}

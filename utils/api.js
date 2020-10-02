const BASE_API = 'https://api-test.sige-edu.com:8000/api/';

class Api {
  async getSubject(id) {
    const query = await fetch(`${BASE_API}courses/academiccharge/bystudent/101285`);
    const { data } = await query.json();
    console.log('subject', data);
    return data
  }
}

export default new Api();
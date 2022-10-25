import type { NextPage } from 'next';
import MetaData from '../meta';
import styles from '../styles/Home.module.scss';

// {
//   "name": "Sanele Mngadi",
//     "email_owner": "sanelemngadi17@gmail.com",
//       "email_user": "218014972@stu.ukzn.ac.za",
//         "subject": "Trauma caunselling",
//           "message": "Hi this is sanele mngadi I send this email because I want to book for an appointment",
//             "greetings": "Good morning Sanele"
// }

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <MetaData
        title='Xolani Bukhosini Home | Private Social Worker'
        subtitle='My name is Xolani Bukhosini, potentially your next social worker. I offer a private social work service. I have a degree in social worker that I obtained in the University of Zululand. I am registered as a private social worker (Practice No: 9990890000825050).'
        image='/images/xeImage.jpg'
        path='/'
      />
      <main>
        Home
      </main>

    </div>
  )
}

export default Home

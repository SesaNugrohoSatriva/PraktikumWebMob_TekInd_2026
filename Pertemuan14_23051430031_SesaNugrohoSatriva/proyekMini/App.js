import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform, TouchableOpacity, Alert, ScrollView, Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      {/* Bagian Header */}
      <View style={styles.header}>
        {/* Latihan 1 (Gambar/Ikon) */}
        <Image 
          source={require('./logo.png')} 
          style={styles.headerLogo}
          resizeMode="contain"
        />
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTitle}>PT. Manufaktur Maju</Text>
          <Text style={styles.headerSubtitle}>Profil Mesin Mobile</Text>
        </View>
      </View>
      
      {/* Latihan 2 (ScrollView) */}
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.welcomeText}>Selamat Datang, Operator!</Text>
          <Text style={styles.welcomeText}>Sesa Nugroho Satriva</Text>
          <Text style={styles.welcomeText}>23051430031</Text>

          {/* ===== BAGIAN PROYEK MINI: PROFIL MESIN ===== */}
          <Text style={styles.sectionTitle}>Daftar Mesin</Text>

          {/* Card Mesin 1 */}
          <View style={styles.mesinCard}>
            <Image 
              source={require('./MesinCNCFrais.png')} 
              style={styles.mesinImage}
            />
            <View style={styles.infoContainer}>
              <Text style={styles.mesinTitle}>Mesin CNC Frais</Text>
              <Text style={styles.mesinDetail}>Tahun: 2021</Text>
              <Text style={[styles.mesinStatus, styles.statusActive]}>Status: Beroperasi</Text>
            </View>
          </View>

          {/* Card Mesin 2 */}
          <View style={styles.mesinCard}>
            <Image 
              source={require('./MesinBubutOtomatis.png')} 
              style={styles.mesinImage}
            />
            <View style={styles.infoContainer}>
              <Text style={styles.mesinTitle}>Mesin Bubut Otomatis</Text>
              <Text style={styles.mesinDetail}>Tahun: 2019</Text>
              <Text style={[styles.mesinStatus, styles.statusMaintenance]}>Status: Perawatan</Text>
            </View>
          </View>

          {/* Card Mesin 3 */}
          <View style={styles.mesinCard}>
            <Image 
              source={require('./MesinPressHidrolik.jpg')} 
              style={styles.mesinImage}
            />
            <View style={styles.infoContainer}>
              <Text style={styles.mesinTitle}>Mesin Press Hidrolik</Text>
              <Text style={styles.mesinDetail}>Tahun: 2018</Text>
              <Text style={[styles.mesinStatus, styles.statusInactive]}>Status: Rusak</Text>
            </View>
          </View>

          {/* Card Mesin 4 */}
          <View style={styles.mesinCard}>
            <Image 
              source={require('./MesinInjectionMolding.jpg')} 
              style={styles.mesinImage}
            />
            <View style={styles.infoContainer}>
              <Text style={styles.mesinTitle}>Mesin Injection Molding</Text>
              <Text style={styles.mesinDetail}>Tahun: 2022</Text>
              <Text style={[styles.mesinStatus, styles.statusStandby]}>Status: Standby</Text>
            </View>
          </View>

          {/* Card Mesin 5 */}
          <View style={styles.mesinCard}>
            <Image 
              source={require('./MesinPotongPlasma.jpg')} 
              style={styles.mesinImage}
            />
            <View style={styles.infoContainer}>
              <Text style={styles.mesinTitle}>Mesin Potong Plasma</Text>
              <Text style={styles.mesinDetail}>Tahun: 2020</Text>
              <Text style={[styles.mesinStatus, styles.statusActive]}>Status: Beroperasi</Text>
            </View>
          </View>

          {/* Card Mesin 6 */}
          <View style={styles.mesinCard}>
            <Image 
              source={require('./MesinLasRobotik.jpg')} 
              style={styles.mesinImage}
            />
            <View style={styles.infoContainer}>
              <Text style={styles.mesinTitle}>Mesin Las Robotik</Text>
              <Text style={styles.mesinDetail}>Tahun: 2023</Text>
              <Text style={[styles.mesinStatus, styles.statusStandby]}>Status: Standby</Text>
            </View>
          </View>

          {/* Card Mesin 7 */}
          <View style={styles.mesinCard}>
            <Image 
              source={require('./MesinBendingPlat.jpg')} 
              style={styles.mesinImage}
            />
            <View style={styles.infoContainer}>
              <Text style={styles.mesinTitle}>Mesin Bending Plat</Text>
              <Text style={styles.mesinDetail}>Tahun: 2017</Text>
              <Text style={[styles.mesinStatus, styles.statusMaintenance]}>Status: Perawatan</Text>
            </View>
          </View>

          {/* Card Mesin 8 */}
          <View style={styles.mesinCard}>
            <Image 
              source={require('./MesinBorRadial.jpg')} 
              style={styles.mesinImage}
            />
            <View style={styles.infoContainer}>
              <Text style={styles.mesinTitle}>Mesin Bor Radial</Text>
              <Text style={styles.mesinDetail}>Tahun: 2019</Text>
              <Text style={[styles.mesinStatus, styles.statusActive]}>Status: Beroperasi</Text>
            </View>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Styling menggunakan StyleSheet 
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#f0f2f5',
    paddingTop: Platform.OS === 'android' ? 37 : 0, 
  },
  header: {
    backgroundColor: '#2c3e50',
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 5,
    elevation: 5, // Shadow di Android
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLogo: {
    width: 38,
    height: 38,
    borderRadius: 8,
    marginRight: 12,
  },
  headerTextContainer: {
    flex: 1,
  },
  headerTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  headerSubtitle: {
    color: '#bdc3c7',
    fontSize: 14,
  },
  content: {
    padding: 20,
  },
  welcomeText: {
    fontSize: 18,
    marginBottom: 15,
    color: '#333',
  },
  
  // === Styling Proyek Mini (Mesin) ===
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginTop: 10,
    marginBottom: 15,
  },
  mesinCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    flexDirection: 'row', // Foto di kiri, teks di kanan
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  mesinImage: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginRight: 15,
    backgroundColor: '#e0e0e0', 
  },
  infoContainer: {
    flex: 1,
  },
  mesinTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  mesinDetail: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 5,
  },
  mesinStatus: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  statusActive: {
    color: '#27ae60',
  },
  statusMaintenance: {
    color: '#f39c12',
  },
  statusInactive: {
    color: '#e74c3c',
  },
  statusStandby: {
    color: '#3498db', 
  }
});

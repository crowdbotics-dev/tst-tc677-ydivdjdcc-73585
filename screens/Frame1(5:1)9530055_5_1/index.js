import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_5_3} />
      <View style={styles.View_11_4} />
      <View style={styles.View_5_4}>
        <Text style={styles.Text_5_4}>Dashboard</Text>
      </View>
      <View style={styles.View_5_6}>
        <Text style={styles.Text_5_6}>Employees</Text>
      </View>
      <View style={styles.View_5_11}>
        <Text style={styles.Text_5_11}>Onboarding</Text>
      </View>
      <View style={styles.View_5_12}>
        <Text style={styles.Text_5_12}>Offboarding</Text>
      </View>
      <View style={styles.View_5_13}>
        <Text style={styles.Text_5_13}>Activities</Text>
      </View>
      <View style={styles.View_5_14}>
        <Text style={styles.Text_5_14}>Settings</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e7fa5ba4-3849-4b4d-948e-989ba4013496"
        }}
        style={styles.ImageBackground_5_20}
      />
      <View style={styles.View_7_0} />
      <View style={styles.View_7_1} />
      <View style={styles.View_7_2} />
      <View style={styles.View_7_3} />
      <View style={styles.View_7_4} />
      <View style={styles.View_7_5} />
      <View style={styles.View_7_6} />
      <View style={styles.View_7_7} />
      <View style={styles.View_7_14}>
        <Text style={styles.Text_7_14}>Recruitment Progress</Text>
      </View>
      <View style={styles.View_7_16} />
      <View style={styles.View_7_17} />
      <View style={styles.View_7_18} />
      <View style={styles.View_8_2} />
      <View style={styles.View_8_4}>
        <Text style={styles.Text_8_4}>All statuses</Text>
      </View>
      <View style={styles.View_8_5}>
        <Text style={styles.Text_8_5}>Today</Text>
      </View>
      <View style={styles.View_8_6}>
        <Text style={styles.Text_8_6}>Full Name</Text>
      </View>
      <View style={styles.View_8_7}>
        <Text style={styles.Text_8_7}>Email Address</Text>
      </View>
      <View style={styles.View_8_8}>
        <Text style={styles.Text_8_8}>Status</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/231c53e5-9f10-43d7-9ab4-288a0203f71c"
        }}
        style={styles.ImageBackground_9_8}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dd7d3a1e-c22d-4e96-9b9e-6bc513c608cf"
        }}
        style={styles.ImageBackground_9_10}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/645341c1-c71f-4c81-882c-7eebbc20d502"
        }}
        style={styles.ImageBackground_9_2}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6e14ef0a-eaae-4b74-8ac6-d84f8ca5a1e0"
        }}
        style={styles.ImageBackground_9_5}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4dc42c2d-79cf-45d7-a5af-4a0640ba5a31"
        }}
        style={styles.ImageBackground_9_3}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/14b7ed24-c7ed-42c3-97ef-0afdb6506f6b"
        }}
        style={styles.ImageBackground_9_11}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b31aa2b3-9520-4ada-9e82-2edb6425dd2a"
        }}
        style={styles.ImageBackground_9_7}
      />
      <View style={styles.View_9_12}>
        <Text style={styles.Text_9_12}>John Doe</Text>
      </View>
      <View style={styles.View_9_13}>
        <Text style={styles.Text_9_13}>john.doe@gmail.com</Text>
      </View>
      <View style={styles.View_9_14}>
        <Text style={styles.Text_9_14}>Seleted</Text>
      </View>
      <View style={styles.View_9_18}>
        <Text style={styles.Text_9_18}>Mike Tylor</Text>
      </View>
      <View style={styles.View_9_19}>
        <Text style={styles.Text_9_19}>tylor.mike@gmail.com</Text>
      </View>
      <View style={styles.View_9_20}>
        <Text style={styles.Text_9_20}>Screening</Text>
      </View>
      <View style={styles.View_9_21}>
        <Text style={styles.Text_9_21}>Jane Doe</Text>
      </View>
      <View style={styles.View_9_22}>
        <Text style={styles.Text_9_22}>jane.d@gmil.com</Text>
      </View>
      <View style={styles.View_9_23}>
        <Text style={styles.Text_9_23}>Interview</Text>
      </View>
      <View style={styles.View_9_24}>
        <Text style={styles.Text_9_24}>Michal</Text>
      </View>
      <View style={styles.View_9_25}>
        <Text style={styles.Text_9_25}>michal.s@gmail.com</Text>
      </View>
      <View style={styles.View_9_26}>
        <Text style={styles.Text_9_26}>Tech interview</Text>
      </View>
      <View style={styles.View_9_27}>
        <Text style={styles.Text_9_27}>Samsquanch</Text>
      </View>
      <View style={styles.View_9_28}>
        <Text style={styles.Text_9_28}>sam.s@gmail.com</Text>
      </View>
      <View style={styles.View_9_29}>
        <Text style={styles.Text_9_29}>Interview</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/68818676-8468-4dce-9d1f-0a3be378ebb2"
        }}
        style={styles.ImageBackground_9_9}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e1a06591-42a2-426b-8600-c8e7e8886976"
        }}
        style={styles.ImageBackground_9_31}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2965dd54-c508-4f2f-b386-449c7144bc31"
        }}
        style={styles.ImageBackground_9_32}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/62a0388f-0879-4cbb-afde-690d658e9708"
        }}
        style={styles.ImageBackground_9_33}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/82d750d5-b0c8-43b6-b801-74dab6145609"
        }}
        style={styles.ImageBackground_9_34}
      />
      <View style={styles.View_9_15}>
        <Text style={styles.Text_9_15}>Slok Vats</Text>
      </View>
      <View style={styles.View_9_16}>
        <Text style={styles.Text_9_16}>vats.slok@gmail.com</Text>
      </View>
      <View style={styles.View_9_17}>
        <Text style={styles.Text_9_17}>Task</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6ee0d275-8050-4fdd-8c55-0bbded4ebe57"
        }}
        style={styles.ImageBackground_9_30}
      />
      <View style={styles.View_10_5} />
      <View style={styles.View_11_2}>
        <View style={styles.View_5_5}>
          <Text style={styles.Text_5_5}>Dashboard</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7d255a29-665a-43f9-832b-34ef060595bc"
          }}
          style={styles.ImageBackground_9_4}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0a77e1d0-bf48-4f9d-b3f6-362ffe6b9086"
        }}
        style={styles.ImageBackground_11_6}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a2c42a03-3a51-44a1-8049-7e4613f0b6f8"
        }}
        style={styles.ImageBackground_11_7}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/45fd223a-2b88-498d-a6cd-f7af33456e56"
        }}
        style={styles.ImageBackground_11_8}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bc13ea81-6005-4bd8-8068-1ad2cff9fd73"
        }}
        style={styles.ImageBackground_11_9}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/489b0e65-7f26-4393-8b0b-2b493c6db3b9"
        }}
        style={styles.ImageBackground_11_10}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fe4333e3-f191-41b2-95ba-d5062b21b681"
        }}
        style={styles.ImageBackground_11_11}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c13709fd-ae54-48da-9db0-24641deb1127"
        }}
        style={styles.ImageBackground_11_15}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a87d38f8-7833-4f95-bd3d-6ca01617af08"
        }}
        style={styles.ImageBackground_11_16}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/76c1410e-6b2f-4e39-8e8c-edf74387bbe0"
        }}
        style={styles.ImageBackground_11_17}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/16c58141-ec05-4fdf-8ab8-56116f2a9058"
        }}
        style={styles.ImageBackground_11_18}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d19e0784-66c8-477f-b4fb-694b7098d6b7"
        }}
        style={styles.ImageBackground_11_19}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4dc678ed-524f-4502-a04c-65a4828d201f"
        }}
        style={styles.ImageBackground_11_20}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f37b1e69-227c-4e2d-a205-6558dd7894c5"
        }}
        style={styles.ImageBackground_11_14}
      />
      <View style={styles.View_11_21}>
        <Text style={styles.Text_11_21}>John Doe</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/55bdfc3c-e68b-400a-9125-771803ad625d"
        }}
        style={styles.ImageBackground_11_22}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5441dde7-341c-4f62-9177-98e85f970064"
        }}
        style={styles.ImageBackground_11_23}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e2b34c60-7698-4dac-93a9-ff74acdde310"
        }}
        style={styles.ImageBackground_11_24}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6b3e2d9a-61cb-402f-b892-7ca065972a71"
        }}
        style={styles.ImageBackground_11_25}
      />
      <View style={styles.View_11_26} />
      <View style={styles.View_11_27} />
      <View style={styles.View_11_28}>
        <Text style={styles.Text_11_28}>743</Text>
      </View>
      <View style={styles.View_11_29}>
        <Text style={styles.Text_11_29}>21</Text>
      </View>
      <View style={styles.View_11_31}>
        <Text style={styles.Text_11_31}>Employees</Text>
      </View>
      <View style={styles.View_11_32}>
        <Text style={styles.Text_11_32}>Time-off</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/582935eb-fc8f-4ed4-8676-80fb6bb1116a"
        }}
        style={styles.ImageBackground_12_2}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d898091b-b345-411d-98ed-e97a8c5b1a73"
        }}
        style={styles.ImageBackground_12_3}
      />
      <View style={styles.View_14_1} />
      <View style={styles.View_14_2} />
      <View style={styles.View_14_3} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c829285c-3c9b-48d6-a515-495e1ff242ed"
        }}
        style={styles.ImageBackground_14_9}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/70545ce4-2a29-4789-850c-d250879311be"
        }}
        style={styles.ImageBackground_14_10}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ab432f19-59a3-43d2-8936-58b6cb04ee59"
        }}
        style={styles.ImageBackground_14_5}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/04ba826e-c3c4-4f4f-afa9-883429699216"
        }}
        style={styles.ImageBackground_17_1}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d2298a1f-63c5-4ed0-92b9-c33fb698f182"
        }}
        style={styles.ImageBackground_14_11}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/64ac57fa-e30f-41c0-9a10-ddef3c516503"
        }}
        style={styles.ImageBackground_14_12}
      />
      <View style={styles.View_16_2}>
        <View style={styles.View_14_7}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3cf20781-4e17-4ca0-8b2f-778ade0faf2d"
            }}
            style={styles.ImageBackground_14_4}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3844248f-b9c6-499e-93bf-2aea8bfe0a24"
            }}
            style={styles.ImageBackground_17_0}
          />
          <View style={styles.View_17_2}>
            <Text style={styles.Text_17_2}>25.5%</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_14_13}>
        <Text style={styles.Text_14_13}>Accepted</Text>
      </View>
      <View style={styles.View_14_15}>
        <Text style={styles.Text_14_15}>job applications</Text>
      </View>
      <View style={styles.View_14_16}>
        <Text style={styles.Text_14_16}>87/340</Text>
      </View>
      <View style={styles.View_15_2}>
        <Text style={styles.Text_15_2}>Rejected</Text>
      </View>
      <View style={styles.View_15_3}>
        <Text style={styles.Text_15_3}>job applications</Text>
      </View>
      <View style={styles.View_15_5}>
        <Text style={styles.Text_15_5}>174/340</Text>
      </View>
      <View style={styles.View_17_3}>
        <Text style={styles.Text_17_3}>51.1%</Text>
      </View>
      <View style={styles.View_19_2} />
      <View style={styles.View_19_3} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3780a620-6083-4f09-b0cf-66be3fd2851b"
        }}
        style={styles.ImageBackground_19_4}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8c6fd649-708c-439e-a8c3-9300297dd2df"
        }}
        style={styles.ImageBackground_19_5}
      />
      <View style={styles.View_19_6}>
        <Text style={styles.Text_19_6}>December 2020</Text>
      </View>
      <View style={styles.View_19_7}>
        <Text style={styles.Text_19_7}>S</Text>
      </View>
      <View style={styles.View_20_2}>
        <Text style={styles.Text_20_2}>M</Text>
      </View>
      <View style={styles.View_20_3}>
        <Text style={styles.Text_20_3}>T</Text>
      </View>
      <View style={styles.View_20_4}>
        <Text style={styles.Text_20_4}>W</Text>
      </View>
      <View style={styles.View_20_5}>
        <Text style={styles.Text_20_5}>T</Text>
      </View>
      <View style={styles.View_20_6}>
        <Text style={styles.Text_20_6}>F</Text>
      </View>
      <View style={styles.View_20_7}>
        <Text style={styles.Text_20_7}>S</Text>
      </View>
      <View style={styles.View_20_8}>
        <Text style={styles.Text_20_8}>29</Text>
      </View>
      <View style={styles.View_20_9}>
        <Text style={styles.Text_20_9}>30</Text>
      </View>
      <View style={styles.View_20_10}>
        <Text style={styles.Text_20_10}>1</Text>
      </View>
      <View style={styles.View_20_11}>
        <Text style={styles.Text_20_11}>2</Text>
      </View>
      <View style={styles.View_20_12}>
        <Text style={styles.Text_20_12}>3</Text>
      </View>
      <View style={styles.View_20_13}>
        <Text style={styles.Text_20_13}>4</Text>
      </View>
      <View style={styles.View_20_14}>
        <Text style={styles.Text_20_14}>5</Text>
      </View>
      <View style={styles.View_20_16}>
        <Text style={styles.Text_20_16}>6</Text>
      </View>
      <View style={styles.View_20_24}>
        <Text style={styles.Text_20_24}>13</Text>
      </View>
      <View style={styles.View_20_31}>
        <Text style={styles.Text_20_31}>20</Text>
      </View>
      <View style={styles.View_20_17}>
        <Text style={styles.Text_20_17}>7</Text>
      </View>
      <View style={styles.View_20_25}>
        <Text style={styles.Text_20_25}>14</Text>
      </View>
      <View style={styles.View_20_32}>
        <Text style={styles.Text_20_32}>21</Text>
      </View>
      <View style={styles.View_20_18}>
        <Text style={styles.Text_20_18}>8</Text>
      </View>
      <View style={styles.View_20_26}>
        <Text style={styles.Text_20_26}>15</Text>
      </View>
      <View style={styles.View_20_33}>
        <Text style={styles.Text_20_33}>22</Text>
      </View>
      <View style={styles.View_20_19}>
        <Text style={styles.Text_20_19}>9</Text>
      </View>
      <View style={styles.View_20_27}>
        <Text style={styles.Text_20_27}>16</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/178df81f-c0e7-448e-96a1-15391eb9d0e3"
        }}
        style={styles.ImageBackground_21_9}
      />
      <View style={styles.View_20_34}>
        <Text style={styles.Text_20_34}>23</Text>
      </View>
      <View style={styles.View_20_20}>
        <Text style={styles.Text_20_20}>10</Text>
      </View>
      <View style={styles.View_20_28}>
        <Text style={styles.Text_20_28}>17</Text>
      </View>
      <View style={styles.View_20_35}>
        <Text style={styles.Text_20_35}>24</Text>
      </View>
      <View style={styles.View_20_21}>
        <Text style={styles.Text_20_21}>11</Text>
      </View>
      <View style={styles.View_20_29}>
        <Text style={styles.Text_20_29}>18</Text>
      </View>
      <View style={styles.View_20_36}>
        <Text style={styles.Text_20_36}>25</Text>
      </View>
      <View style={styles.View_20_23}>
        <Text style={styles.Text_20_23}>12</Text>
      </View>
      <View style={styles.View_20_30}>
        <Text style={styles.Text_20_30}>19</Text>
      </View>
      <View style={styles.View_20_37}>
        <Text style={styles.Text_20_37}>26</Text>
      </View>
      <View style={styles.View_21_2}>
        <Text style={styles.Text_21_2}>27</Text>
      </View>
      <View style={styles.View_21_3}>
        <Text style={styles.Text_21_3}>28</Text>
      </View>
      <View style={styles.View_21_4}>
        <Text style={styles.Text_21_4}>29</Text>
      </View>
      <View style={styles.View_21_5}>
        <Text style={styles.Text_21_5}>30</Text>
      </View>
      <View style={styles.View_21_6}>
        <Text style={styles.Text_21_6}>31</Text>
      </View>
      <View style={styles.View_21_7}>
        <Text style={styles.Text_21_7}>1</Text>
      </View>
      <View style={styles.View_21_8}>
        <Text style={styles.Text_21_8}>2</Text>
      </View>
      <View style={styles.View_21_10} />
      <View style={styles.View_21_11}>
        <Text style={styles.Text_21_11}>Evaluation progress</Text>
      </View>
      <View style={styles.View_21_12}>
        <Text style={styles.Text_21_12}>See more</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/878e8a0f-506d-4d8a-97e9-90f779ee1708"
        }}
        style={styles.ImageBackground_21_13}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/47cdc870-1680-48e4-b307-4129aebb357e"
        }}
        style={styles.ImageBackground_21_16}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c2b8fc84-7a35-4d9c-a0a7-264d880efbff"
        }}
        style={styles.ImageBackground_21_17}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ee64447b-f084-4453-9148-3d2bf77781bd"
        }}
        style={styles.ImageBackground_21_18}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b4f8931c-8ecc-4c00-83ac-5498269436b2"
        }}
        style={styles.ImageBackground_21_19}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/128ff00f-91bc-4f83-9e95-5b5110500f2e"
        }}
        style={styles.ImageBackground_21_20}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a3fa428f-fc44-4f86-8e64-d5d01b7326e5"
        }}
        style={styles.ImageBackground_21_21}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e0986b17-e777-40b5-adf3-b4d60f61cd47"
        }}
        style={styles.ImageBackground_21_22}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/80d75a89-de85-4df0-945e-32e4856f037b"
        }}
        style={styles.ImageBackground_21_23}
      />
      <View style={styles.View_21_24}>
        <Text style={styles.Text_21_24}>12</Text>
      </View>
      <View style={styles.View_21_25}>
        <Text style={styles.Text_21_25}>14</Text>
      </View>
      <View style={styles.View_21_26}>
        <Text style={styles.Text_21_26}>4</Text>
      </View>
      <View style={styles.View_21_27}>
        <Text style={styles.Text_21_27}>15</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/94587346-a59b-420f-8aaf-665d54c170e9"
        }}
        style={styles.ImageBackground_21_29}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9a565ce0-0f8b-4904-a71b-4822170c0f3a"
        }}
        style={styles.ImageBackground_21_30}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e6885574-1b77-4beb-940a-18e3e077dee5"
        }}
        style={styles.ImageBackground_21_31}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/475187e2-3cf2-40c0-93aa-06b279e9fb24"
        }}
        style={styles.ImageBackground_21_32}
      />
      <View style={styles.View_21_33}>
        <Text style={styles.Text_21_33}>Design</Text>
      </View>
      <View style={styles.View_21_34}>
        <Text style={styles.Text_21_34}>iOS</Text>
      </View>
      <View style={styles.View_21_35}>
        <Text style={styles.Text_21_35}>HR</Text>
      </View>
      <View style={styles.View_21_36}>
        <Text style={styles.Text_21_36}>DevOps</Text>
      </View>
      <View style={styles.View_21_39} />
      <View style={styles.View_21_40}>
        <Text style={styles.Text_21_40}>Hello John Doe!</Text>
      </View>
      <View style={styles.View_21_41}>
        <Text style={styles.Text_21_41}>
          Welcome back! You have 16 notifications.
        </Text>
      </View>
      <View style={styles.View_21_42} />
      <View style={styles.View_21_44}>
        <Text style={styles.Text_21_44}>Learn more</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/441fc01a-c87b-4cc8-8f8f-8d42b4855ec7"
        }}
        style={styles.ImageBackground_25_0}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2b47fe56-f79b-4608-94eb-0dcbb17fc940"
        }}
        style={styles.ImageBackground_24_1}
      />
      <View style={styles.View_30_2} />
      <View style={styles.View_30_4}>
        <Text style={styles.Text_30_4}>3</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(243, 243, 243, 0.6000000238418579)" },
  View_2: { height: hp("100%") },
  View_5_3: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(36, 25, 48, 1)"
  },
  View_11_4: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    backgroundColor: "rgba(51, 21, 79, 1)"
  },
  View_5_4: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_5_4: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_6: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("21%"),
    justifyContent: "center"
  },
  Text_5_6: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_11: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("28%"),
    justifyContent: "center"
  },
  Text_5_11: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_12: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("35%"),
    justifyContent: "center"
  },
  Text_5_12: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_13: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("42%"),
    justifyContent: "center"
  },
  Text_5_13: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_14: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("50%"),
    justifyContent: "center"
  },
  Text_5_14: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_20: {
    width: wp("50%"),
    height: hp("57%"),
    top: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  View_7_0: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("43%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_7_1: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("50%"),
    backgroundColor: "rgba(243, 243, 243, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 0.5
  },
  View_7_2: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("55%"),
    backgroundColor: "rgba(249, 249, 249, 1)"
  },
  View_7_3: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("63%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 0.5
  },
  View_7_4: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("70%"),
    backgroundColor: "rgba(249, 249, 249, 1)"
  },
  View_7_5: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("78%"),
    backgroundColor: "rgba(249, 249, 249, 1)"
  },
  View_7_6: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("85%"),
    backgroundColor: "rgba(249, 249, 249, 1)"
  },
  View_7_7: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("93%"),
    backgroundColor: "rgba(249, 249, 249, 1)"
  },
  View_7_14: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("45%"),
    justifyContent: "center"
  },
  Text_7_14: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_7_16: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("44%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 0.5
  },
  View_7_17: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("44%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 0.5
  },
  View_7_18: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("44%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_8_2: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("44%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_8_4: {
    width: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("45%"),
    justifyContent: "center"
  },
  Text_8_4: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_8_5: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("45%"),
    justifyContent: "center"
  },
  Text_8_5: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_8_6: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("50%"),
    justifyContent: "center"
  },
  Text_8_6: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_8_7: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("50%"),
    justifyContent: "center"
  },
  Text_8_7: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_8_8: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("50%"),
    justifyContent: "center"
  },
  Text_8_8: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  ImageBackground_9_8: {
    width: wp("2%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("43%")
  },
  ImageBackground_9_10: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("43%")
  },
  ImageBackground_9_2: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("49%")
  },
  ImageBackground_9_5: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("20%")
  },
  ImageBackground_9_3: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("42%")
  },
  ImageBackground_9_11: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("27%")
  },
  ImageBackground_9_7: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("35%")
  },
  View_9_12: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("57%"),
    justifyContent: "center"
  },
  Text_9_12: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_9_13: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("57%"),
    justifyContent: "center"
  },
  Text_9_13: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_9_14: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("57%"),
    justifyContent: "center"
  },
  Text_9_14: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_9_18: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("72%"),
    justifyContent: "center"
  },
  Text_9_18: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_9_19: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("73%"),
    justifyContent: "center"
  },
  Text_9_19: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_9_20: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("72%"),
    justifyContent: "center"
  },
  Text_9_20: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_9_21: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("80%"),
    justifyContent: "center"
  },
  Text_9_21: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_9_22: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("80%"),
    justifyContent: "center"
  },
  Text_9_22: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_9_23: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("80%"),
    justifyContent: "center"
  },
  Text_9_23: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_9_24: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("88%"),
    justifyContent: "center"
  },
  Text_9_24: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_9_25: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("88%"),
    justifyContent: "center"
  },
  Text_9_25: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_9_26: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("88%"),
    justifyContent: "center"
  },
  Text_9_26: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_9_27: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("96%"),
    justifyContent: "center"
  },
  Text_9_27: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_9_28: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("95%"),
    justifyContent: "center"
  },
  Text_9_28: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_9_29: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("95%"),
    justifyContent: "center"
  },
  Text_9_29: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  ImageBackground_9_9: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("57%")
  },
  ImageBackground_9_31: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("72%")
  },
  ImageBackground_9_32: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("79%")
  },
  ImageBackground_9_33: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("87%")
  },
  ImageBackground_9_34: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("94%")
  },
  View_9_15: {
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("65%"),
    justifyContent: "flex-start"
  },
  Text_9_15: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_9_16: {
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("65%"),
    justifyContent: "flex-start"
  },
  Text_9_16: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_9_17: {
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("65%"),
    justifyContent: "flex-start"
  },
  Text_9_17: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  ImageBackground_9_30: {
    width: wp("3%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("64%")
  },
  View_10_5: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("63%"),
    backgroundColor: "rgba(73, 42, 135, 1)"
  },
  View_11_2: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_5_5: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_5_5: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_4: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_11_6: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("58%")
  },
  ImageBackground_11_7: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("65%")
  },
  ImageBackground_11_8: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("73%")
  },
  ImageBackground_11_9: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("80%")
  },
  ImageBackground_11_10: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("88%")
  },
  ImageBackground_11_11: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("96%")
  },
  ImageBackground_11_15: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("56%")
  },
  ImageBackground_11_16: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("64%")
  },
  ImageBackground_11_17: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("71%")
  },
  ImageBackground_11_18: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("79%")
  },
  ImageBackground_11_19: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("86%")
  },
  ImageBackground_11_20: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("94%")
  },
  ImageBackground_11_14: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("1%")
  },
  View_11_21: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_11_21: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  ImageBackground_11_22: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("98%"),
    top: hp("2%")
  },
  ImageBackground_11_23: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("2%")
  },
  ImageBackground_11_24: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("1%")
  },
  ImageBackground_11_25: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("1%")
  },
  View_11_26: {
    width: wp("12%"),
    height: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("43%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_11_27: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("43%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_11_28: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("49%"),
    justifyContent: "center"
  },
  Text_11_28: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.72,
    textTransform: "none"
  },
  View_11_29: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("49%"),
    justifyContent: "center"
  },
  Text_11_29: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.72,
    textTransform: "none"
  },
  View_11_31: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("55%"),
    justifyContent: "center"
  },
  Text_11_31: {
    color: "rgba(130, 72, 185, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_11_32: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("55%"),
    justifyContent: "center"
  },
  Text_11_32: {
    color: "rgba(130, 72, 185, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  ImageBackground_12_2: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("45%")
  },
  ImageBackground_12_3: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("45%")
  },
  View_14_1: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("37%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("63%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_14_2: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("9%"),
    backgroundColor: "rgba(108, 69, 146, 1)"
  },
  View_14_3: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("27%"),
    backgroundColor: "rgba(229, 96, 96, 1)"
  },
  ImageBackground_14_9: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("35%")
  },
  ImageBackground_14_10: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("9%")
  },
  ImageBackground_14_5: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("28%")
  },
  ImageBackground_17_1: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("28%")
  },
  ImageBackground_14_11: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("29%")
  },
  ImageBackground_14_12: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("19%")
  },
  View_16_2: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_14_7: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_14_4: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_17_0: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_17_2: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_17_2: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.36,
    textTransform: "none"
  },
  View_14_13: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("11%"),
    justifyContent: "center"
  },
  Text_14_13: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_14_15: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("14%"),
    justifyContent: "center"
  },
  Text_14_15: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_14_16: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("18%"),
    justifyContent: "center"
  },
  Text_14_16: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_15_2: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("28%"),
    justifyContent: "center"
  },
  Text_15_2: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_15_3: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("32%"),
    justifyContent: "center"
  },
  Text_15_3: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_15_5: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("37%"),
    justifyContent: "center"
  },
  Text_15_5: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_17_3: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("32%"),
    justifyContent: "center"
  },
  Text_17_3: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.36,
    textTransform: "none"
  },
  View_19_2: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("65%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_19_3: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("95%"),
    top: hp("65%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_19_4: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("96%"),
    top: hp("65%")
  },
  ImageBackground_19_5: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("65%")
  },
  View_19_6: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("65%"),
    justifyContent: "center"
  },
  Text_19_6: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_7: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("72%"),
    justifyContent: "center"
  },
  Text_19_7: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_2: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("72%"),
    justifyContent: "center"
  },
  Text_20_2: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_3: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("72%"),
    justifyContent: "center"
  },
  Text_20_3: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_4: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("72%"),
    justifyContent: "center"
  },
  Text_20_4: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_5: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("72%"),
    justifyContent: "center"
  },
  Text_20_5: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_6: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93%"),
    top: hp("72%"),
    justifyContent: "center"
  },
  Text_20_6: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_7: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("96%"),
    top: hp("72%"),
    justifyContent: "center"
  },
  Text_20_7: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_8: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("78%"),
    justifyContent: "center"
  },
  Text_20_8: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_9: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("78%"),
    justifyContent: "center"
  },
  Text_20_9: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_10: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("78%"),
    justifyContent: "center"
  },
  Text_20_10: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_11: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("78%"),
    justifyContent: "center"
  },
  Text_20_11: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_12: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("78%"),
    justifyContent: "center"
  },
  Text_20_12: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_13: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93%"),
    top: hp("78%"),
    justifyContent: "center"
  },
  Text_20_13: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_14: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("97%"),
    top: hp("78%"),
    justifyContent: "center"
  },
  Text_20_14: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_16: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("82%"),
    justifyContent: "center"
  },
  Text_20_16: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_24: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("87%"),
    justifyContent: "center"
  },
  Text_20_24: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_31: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("91%"),
    justifyContent: "center"
  },
  Text_20_31: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_17: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("82%"),
    justifyContent: "center"
  },
  Text_20_17: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_25: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("87%"),
    justifyContent: "center"
  },
  Text_20_25: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_32: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("91%"),
    justifyContent: "center"
  },
  Text_20_32: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_18: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("82%"),
    justifyContent: "center"
  },
  Text_20_18: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_26: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("87%"),
    justifyContent: "center"
  },
  Text_20_26: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_33: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("91%"),
    justifyContent: "center"
  },
  Text_20_33: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_19: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("82%"),
    justifyContent: "center"
  },
  Text_20_19: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_27: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("87%"),
    justifyContent: "center"
  },
  Text_20_27: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_21_9: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("90%")
  },
  View_20_34: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("91%"),
    justifyContent: "center"
  },
  Text_20_34: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_20: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("82%"),
    justifyContent: "center"
  },
  Text_20_20: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_28: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("87%"),
    justifyContent: "center"
  },
  Text_20_28: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_35: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("91%"),
    justifyContent: "center"
  },
  Text_20_35: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_21: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93%"),
    top: hp("82%"),
    justifyContent: "center"
  },
  Text_20_21: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_29: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93%"),
    top: hp("87%"),
    justifyContent: "center"
  },
  Text_20_29: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_36: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93%"),
    top: hp("91%"),
    justifyContent: "center"
  },
  Text_20_36: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_23: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("96%"),
    top: hp("82%"),
    justifyContent: "center"
  },
  Text_20_23: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_30: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("96%"),
    top: hp("87%"),
    justifyContent: "center"
  },
  Text_20_30: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_37: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("96%"),
    top: hp("91%"),
    justifyContent: "center"
  },
  Text_20_37: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_2: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("96%"),
    justifyContent: "center"
  },
  Text_21_2: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_3: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("96%"),
    justifyContent: "center"
  },
  Text_21_3: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_4: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("96%"),
    justifyContent: "center"
  },
  Text_21_4: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_5: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("96%"),
    justifyContent: "center"
  },
  Text_21_5: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_6: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("96%"),
    justifyContent: "center"
  },
  Text_21_6: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_7: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93%"),
    top: hp("96%"),
    justifyContent: "center"
  },
  Text_21_7: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_8: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("97%"),
    top: hp("96%"),
    justifyContent: "center"
  },
  Text_21_8: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_10: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("9%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_21_11: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("11%"),
    justifyContent: "center"
  },
  Text_21_11: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_12: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("11%"),
    justifyContent: "center"
  },
  Text_21_12: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_21_13: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("12%")
  },
  ImageBackground_21_16: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("17%")
  },
  ImageBackground_21_17: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("17%")
  },
  ImageBackground_21_18: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("22%")
  },
  ImageBackground_21_19: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("31%")
  },
  ImageBackground_21_20: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("26%")
  },
  ImageBackground_21_21: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("22%")
  },
  ImageBackground_21_22: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("31%")
  },
  ImageBackground_21_23: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("26%")
  },
  View_21_24: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("16%"),
    justifyContent: "center"
  },
  Text_21_24: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_25: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("21%"),
    justifyContent: "center"
  },
  Text_21_25: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_26: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("26%"),
    justifyContent: "center"
  },
  Text_21_26: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_27: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("30%"),
    justifyContent: "center"
  },
  Text_21_27: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_21_29: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("36%")
  },
  ImageBackground_21_30: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("36%")
  },
  ImageBackground_21_31: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("36%")
  },
  ImageBackground_21_32: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("36%")
  },
  View_21_33: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("36%"),
    justifyContent: "center"
  },
  Text_21_33: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_34: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("36%"),
    justifyContent: "center"
  },
  Text_21_34: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_21_35: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("36%"),
    justifyContent: "center"
  },
  Text_21_35: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_36: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("36%"),
    justifyContent: "center"
  },
  Text_21_36: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_39: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("9%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_21_40: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("27%"),
    justifyContent: "center"
  },
  Text_21_40: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_41: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("30%"),
    justifyContent: "center"
  },
  Text_21_41: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_42: {
    width: wp("11%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("35%"),
    backgroundColor: "rgba(130, 72, 185, 1)"
  },
  View_21_44: {
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("36%"),
    justifyContent: "center"
  },
  Text_21_44: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_25_0: {
    width: wp("5%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1%")
  },
  ImageBackground_24_1: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("9%"),
    resizeMode: "cover"
  },
  View_30_2: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("43%"),
    backgroundColor: "rgba(253, 12, 12, 1)",
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 0.5
  },
  View_30_4: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("43%"),
    justifyContent: "center"
  },
  Text_30_4: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)

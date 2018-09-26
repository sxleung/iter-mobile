import React, { Component } from "react";
import { Alert, SectionList, Text, View } from "react-native";
import { connect } from "react-redux";
import { styles } from "./styles";

export class _NearFutureView extends Component {
	static defaultProps = {
		appointments: []
	};

	constructor() {
		super();
	}

	render() {
		return (
			<View>
				<SectionList
					sections={this.props.appointments}
					renderItem={({ item }) => <Text>{item}</Text>}
					keyExtractor={(item, index) => index}
					renderSectionHeader={({ section }) => (
						<View style={styles.sectionHeader}>
							<Text style={styles.item}>{section.title}</Text>
						</View>
					)}
				/>
			</View>
		);
	}
}

const mapActionsToProps = dispatch => ({});

const mapStateToProps = state => ({
	appointments: state.appointments
});

export const NearFutureView = connect(
	mapStateToProps,
	mapActionsToProps
)(_NearFutureView);

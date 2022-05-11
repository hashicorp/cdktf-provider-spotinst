// https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure_v3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElastigroupAzureV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure_v3#custom_data ElastigroupAzureV3#custom_data}
  */
  readonly customData?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure_v3#desired_capacity ElastigroupAzureV3#desired_capacity}
  */
  readonly desiredCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure_v3#max_size ElastigroupAzureV3#max_size}
  */
  readonly maxSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure_v3#min_size ElastigroupAzureV3#min_size}
  */
  readonly minSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure_v3#name ElastigroupAzureV3#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure_v3#od_sizes ElastigroupAzureV3#od_sizes}
  */
  readonly odSizes: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure_v3#os ElastigroupAzureV3#os}
  */
  readonly os: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure_v3#region ElastigroupAzureV3#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure_v3#spot_sizes ElastigroupAzureV3#spot_sizes}
  */
  readonly spotSizes: string[];
  /**
  * image block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure_v3#image ElastigroupAzureV3#image}
  */
  readonly image?: ElastigroupAzureV3Image[] | cdktf.IResolvable;
  /**
  * login block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure_v3#login ElastigroupAzureV3#login}
  */
  readonly login?: ElastigroupAzureV3Login;
  /**
  * managed_service_identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure_v3#managed_service_identity ElastigroupAzureV3#managed_service_identity}
  */
  readonly managedServiceIdentity?: ElastigroupAzureV3ManagedServiceIdentity[] | cdktf.IResolvable;
  /**
  * network block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure_v3#network ElastigroupAzureV3#network}
  */
  readonly network: ElastigroupAzureV3Network;
  /**
  * strategy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure_v3#strategy ElastigroupAzureV3#strategy}
  */
  readonly strategy: ElastigroupAzureV3Strategy;
}
export interface ElastigroupAzureV3ImageCustom {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure_v3#image_name ElastigroupAzureV3#image_name}
  */
  readonly imageName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}
  */
  readonly resourceGroupName: string;
}

export function elastigroupAzureV3ImageCustomToTerraform(struct?: ElastigroupAzureV3ImageCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_name: cdktf.stringToTerraform(struct!.imageName),
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
  }
}

export interface ElastigroupAzureV3ImageMarketplace {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure_v3#offer ElastigroupAzureV3#offer}
  */
  readonly offer: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure_v3#publisher ElastigroupAzureV3#publisher}
  */
  readonly publisher: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure_v3#sku ElastigroupAzureV3#sku}
  */
  readonly sku: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure_v3#version ElastigroupAzureV3#version}
  */
  readonly version: string;
}

export function elastigroupAzureV3ImageMarketplaceToTerraform(struct?: ElastigroupAzureV3ImageMarketplace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    offer: cdktf.stringToTerraform(struct!.offer),
    publisher: cdktf.stringToTerraform(struct!.publisher),
    sku: cdktf.stringToTerraform(struct!.sku),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export interface ElastigroupAzureV3Image {
  /**
  * custom block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure_v3#custom ElastigroupAzureV3#custom}
  */
  readonly custom?: ElastigroupAzureV3ImageCustom[] | cdktf.IResolvable;
  /**
  * marketplace block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure_v3#marketplace ElastigroupAzureV3#marketplace}
  */
  readonly marketplace?: ElastigroupAzureV3ImageMarketplace[] | cdktf.IResolvable;
}

export function elastigroupAzureV3ImageToTerraform(struct?: ElastigroupAzureV3Image | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom: cdktf.listMapper(elastigroupAzureV3ImageCustomToTerraform)(struct!.custom),
    marketplace: cdktf.listMapper(elastigroupAzureV3ImageMarketplaceToTerraform)(struct!.marketplace),
  }
}

export interface ElastigroupAzureV3Login {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure_v3#password ElastigroupAzureV3#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure_v3#ssh_public_key ElastigroupAzureV3#ssh_public_key}
  */
  readonly sshPublicKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure_v3#user_name ElastigroupAzureV3#user_name}
  */
  readonly userName: string;
}

export function elastigroupAzureV3LoginToTerraform(struct?: ElastigroupAzureV3LoginOutputReference | ElastigroupAzureV3Login): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    ssh_public_key: cdktf.stringToTerraform(struct!.sshPublicKey),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}

export class ElastigroupAzureV3LoginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAzureV3Login | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._sshPublicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshPublicKey = this._sshPublicKey;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAzureV3Login | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._sshPublicKey = undefined;
      this._userName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._sshPublicKey = value.sshPublicKey;
      this._userName = value.userName;
    }
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // ssh_public_key - computed: false, optional: true, required: false
  private _sshPublicKey?: string; 
  public get sshPublicKey() {
    return this.getStringAttribute('ssh_public_key');
  }
  public set sshPublicKey(value: string) {
    this._sshPublicKey = value;
  }
  public resetSshPublicKey() {
    this._sshPublicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKeyInput() {
    return this._sshPublicKey;
  }

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}
export interface ElastigroupAzureV3ManagedServiceIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure_v3#name ElastigroupAzureV3#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}
  */
  readonly resourceGroupName: string;
}

export function elastigroupAzureV3ManagedServiceIdentityToTerraform(struct?: ElastigroupAzureV3ManagedServiceIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
  }
}

export interface ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure_v3#name ElastigroupAzureV3#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure_v3#private_ip_version ElastigroupAzureV3#private_ip_version}
  */
  readonly privateIpVersion?: string;
}

export function elastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsToTerraform(struct?: ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    private_ip_version: cdktf.stringToTerraform(struct!.privateIpVersion),
  }
}

export interface ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure_v3#name ElastigroupAzureV3#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}
  */
  readonly resourceGroupName: string;
}

export function elastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupToTerraform(struct?: ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
  }
}

export interface ElastigroupAzureV3NetworkNetworkInterfaces {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure_v3#assign_public_ip ElastigroupAzureV3#assign_public_ip}
  */
  readonly assignPublicIp: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure_v3#is_primary ElastigroupAzureV3#is_primary}
  */
  readonly isPrimary: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure_v3#subnet_name ElastigroupAzureV3#subnet_name}
  */
  readonly subnetName: string;
  /**
  * additional_ip_configs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure_v3#additional_ip_configs ElastigroupAzureV3#additional_ip_configs}
  */
  readonly additionalIpConfigs?: ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs[] | cdktf.IResolvable;
  /**
  * application_security_group block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure_v3#application_security_group ElastigroupAzureV3#application_security_group}
  */
  readonly applicationSecurityGroup?: ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup[] | cdktf.IResolvable;
}

export function elastigroupAzureV3NetworkNetworkInterfacesToTerraform(struct?: ElastigroupAzureV3NetworkNetworkInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assign_public_ip: cdktf.booleanToTerraform(struct!.assignPublicIp),
    is_primary: cdktf.booleanToTerraform(struct!.isPrimary),
    subnet_name: cdktf.stringToTerraform(struct!.subnetName),
    additional_ip_configs: cdktf.listMapper(elastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsToTerraform)(struct!.additionalIpConfigs),
    application_security_group: cdktf.listMapper(elastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupToTerraform)(struct!.applicationSecurityGroup),
  }
}

export interface ElastigroupAzureV3Network {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure_v3#virtual_network_name ElastigroupAzureV3#virtual_network_name}
  */
  readonly virtualNetworkName: string;
  /**
  * network_interfaces block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure_v3#network_interfaces ElastigroupAzureV3#network_interfaces}
  */
  readonly networkInterfaces: ElastigroupAzureV3NetworkNetworkInterfaces[] | cdktf.IResolvable;
}

export function elastigroupAzureV3NetworkToTerraform(struct?: ElastigroupAzureV3NetworkOutputReference | ElastigroupAzureV3Network): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
    virtual_network_name: cdktf.stringToTerraform(struct!.virtualNetworkName),
    network_interfaces: cdktf.listMapper(elastigroupAzureV3NetworkNetworkInterfacesToTerraform)(struct!.networkInterfaces),
  }
}

export class ElastigroupAzureV3NetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAzureV3Network | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupName = this._resourceGroupName;
    }
    if (this._virtualNetworkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetworkName = this._virtualNetworkName;
    }
    if (this._networkInterfaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkInterfaces = this._networkInterfaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAzureV3Network | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceGroupName = undefined;
      this._virtualNetworkName = undefined;
      this._networkInterfaces = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceGroupName = value.resourceGroupName;
      this._virtualNetworkName = value.virtualNetworkName;
      this._networkInterfaces = value.networkInterfaces;
    }
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // virtual_network_name - computed: false, optional: false, required: true
  private _virtualNetworkName?: string; 
  public get virtualNetworkName() {
    return this.getStringAttribute('virtual_network_name');
  }
  public set virtualNetworkName(value: string) {
    this._virtualNetworkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkNameInput() {
    return this._virtualNetworkName;
  }

  // network_interfaces - computed: false, optional: false, required: true
  private _networkInterfaces?: ElastigroupAzureV3NetworkNetworkInterfaces[] | cdktf.IResolvable; 
  public get networkInterfaces() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('network_interfaces');
  }
  public set networkInterfaces(value: ElastigroupAzureV3NetworkNetworkInterfaces[] | cdktf.IResolvable) {
    this._networkInterfaces = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfacesInput() {
    return this._networkInterfaces;
  }
}
export interface ElastigroupAzureV3Strategy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure_v3#draining_timeout ElastigroupAzureV3#draining_timeout}
  */
  readonly drainingTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure_v3#fallback_to_on_demand ElastigroupAzureV3#fallback_to_on_demand}
  */
  readonly fallbackToOnDemand?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure_v3#od_count ElastigroupAzureV3#od_count}
  */
  readonly odCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure_v3#spot_percentage ElastigroupAzureV3#spot_percentage}
  */
  readonly spotPercentage?: number;
}

export function elastigroupAzureV3StrategyToTerraform(struct?: ElastigroupAzureV3StrategyOutputReference | ElastigroupAzureV3Strategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    draining_timeout: cdktf.numberToTerraform(struct!.drainingTimeout),
    fallback_to_on_demand: cdktf.booleanToTerraform(struct!.fallbackToOnDemand),
    od_count: cdktf.numberToTerraform(struct!.odCount),
    spot_percentage: cdktf.numberToTerraform(struct!.spotPercentage),
  }
}

export class ElastigroupAzureV3StrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAzureV3Strategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._drainingTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.drainingTimeout = this._drainingTimeout;
    }
    if (this._fallbackToOnDemand !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackToOnDemand = this._fallbackToOnDemand;
    }
    if (this._odCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.odCount = this._odCount;
    }
    if (this._spotPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotPercentage = this._spotPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAzureV3Strategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._drainingTimeout = undefined;
      this._fallbackToOnDemand = undefined;
      this._odCount = undefined;
      this._spotPercentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._drainingTimeout = value.drainingTimeout;
      this._fallbackToOnDemand = value.fallbackToOnDemand;
      this._odCount = value.odCount;
      this._spotPercentage = value.spotPercentage;
    }
  }

  // draining_timeout - computed: false, optional: true, required: false
  private _drainingTimeout?: number; 
  public get drainingTimeout() {
    return this.getNumberAttribute('draining_timeout');
  }
  public set drainingTimeout(value: number) {
    this._drainingTimeout = value;
  }
  public resetDrainingTimeout() {
    this._drainingTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drainingTimeoutInput() {
    return this._drainingTimeout;
  }

  // fallback_to_on_demand - computed: false, optional: true, required: false
  private _fallbackToOnDemand?: boolean | cdktf.IResolvable; 
  public get fallbackToOnDemand() {
    return this.getBooleanAttribute('fallback_to_on_demand');
  }
  public set fallbackToOnDemand(value: boolean | cdktf.IResolvable) {
    this._fallbackToOnDemand = value;
  }
  public resetFallbackToOnDemand() {
    this._fallbackToOnDemand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackToOnDemandInput() {
    return this._fallbackToOnDemand;
  }

  // od_count - computed: false, optional: true, required: false
  private _odCount?: number; 
  public get odCount() {
    return this.getNumberAttribute('od_count');
  }
  public set odCount(value: number) {
    this._odCount = value;
  }
  public resetOdCount() {
    this._odCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get odCountInput() {
    return this._odCount;
  }

  // spot_percentage - computed: false, optional: true, required: false
  private _spotPercentage?: number; 
  public get spotPercentage() {
    return this.getNumberAttribute('spot_percentage');
  }
  public set spotPercentage(value: number) {
    this._spotPercentage = value;
  }
  public resetSpotPercentage() {
    this._spotPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotPercentageInput() {
    return this._spotPercentage;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure_v3 spotinst_elastigroup_azure_v3}
*/
export class ElastigroupAzureV3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spotinst_elastigroup_azure_v3";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure_v3 spotinst_elastigroup_azure_v3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElastigroupAzureV3Config
  */
  public constructor(scope: Construct, id: string, config: ElastigroupAzureV3Config) {
    super(scope, id, {
      terraformResourceType: 'spotinst_elastigroup_azure_v3',
      terraformGeneratorMetadata: {
        providerName: 'spotinst',
        providerVersion: '1.73.3',
        providerVersionConstraint: '~> 1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._customData = config.customData;
    this._desiredCapacity = config.desiredCapacity;
    this._maxSize = config.maxSize;
    this._minSize = config.minSize;
    this._name = config.name;
    this._odSizes = config.odSizes;
    this._os = config.os;
    this._region = config.region;
    this._resourceGroupName = config.resourceGroupName;
    this._spotSizes = config.spotSizes;
    this._image = config.image;
    this._login.internalValue = config.login;
    this._managedServiceIdentity = config.managedServiceIdentity;
    this._network.internalValue = config.network;
    this._strategy.internalValue = config.strategy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_data - computed: false, optional: true, required: false
  private _customData?: string; 
  public get customData() {
    return this.getStringAttribute('custom_data');
  }
  public set customData(value: string) {
    this._customData = value;
  }
  public resetCustomData() {
    this._customData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDataInput() {
    return this._customData;
  }

  // desired_capacity - computed: false, optional: true, required: false
  private _desiredCapacity?: number; 
  public get desiredCapacity() {
    return this.getNumberAttribute('desired_capacity');
  }
  public set desiredCapacity(value: number) {
    this._desiredCapacity = value;
  }
  public resetDesiredCapacity() {
    this._desiredCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredCapacityInput() {
    return this._desiredCapacity;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_size - computed: true, optional: true, required: false
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // min_size - computed: true, optional: true, required: false
  private _minSize?: number; 
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }
  public set minSize(value: number) {
    this._minSize = value;
  }
  public resetMinSize() {
    this._minSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeInput() {
    return this._minSize;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // od_sizes - computed: false, optional: false, required: true
  private _odSizes?: string[]; 
  public get odSizes() {
    return this.getListAttribute('od_sizes');
  }
  public set odSizes(value: string[]) {
    this._odSizes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get odSizesInput() {
    return this._odSizes;
  }

  // os - computed: false, optional: false, required: true
  private _os?: string; 
  public get os() {
    return this.getStringAttribute('os');
  }
  public set os(value: string) {
    this._os = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // spot_sizes - computed: false, optional: false, required: true
  private _spotSizes?: string[]; 
  public get spotSizes() {
    return this.getListAttribute('spot_sizes');
  }
  public set spotSizes(value: string[]) {
    this._spotSizes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spotSizesInput() {
    return this._spotSizes;
  }

  // image - computed: false, optional: true, required: false
  private _image?: ElastigroupAzureV3Image[] | cdktf.IResolvable; 
  public get image() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('image');
  }
  public set image(value: ElastigroupAzureV3Image[] | cdktf.IResolvable) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // login - computed: false, optional: true, required: false
  private _login = new ElastigroupAzureV3LoginOutputReference(this, "login");
  public get login() {
    return this._login;
  }
  public putLogin(value: ElastigroupAzureV3Login) {
    this._login.internalValue = value;
  }
  public resetLogin() {
    this._login.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginInput() {
    return this._login.internalValue;
  }

  // managed_service_identity - computed: false, optional: true, required: false
  private _managedServiceIdentity?: ElastigroupAzureV3ManagedServiceIdentity[] | cdktf.IResolvable; 
  public get managedServiceIdentity() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('managed_service_identity')));
  }
  public set managedServiceIdentity(value: ElastigroupAzureV3ManagedServiceIdentity[] | cdktf.IResolvable) {
    this._managedServiceIdentity = value;
  }
  public resetManagedServiceIdentity() {
    this._managedServiceIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedServiceIdentityInput() {
    return this._managedServiceIdentity;
  }

  // network - computed: false, optional: false, required: true
  private _network = new ElastigroupAzureV3NetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: ElastigroupAzureV3Network) {
    this._network.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // strategy - computed: false, optional: false, required: true
  private _strategy = new ElastigroupAzureV3StrategyOutputReference(this, "strategy");
  public get strategy() {
    return this._strategy;
  }
  public putStrategy(value: ElastigroupAzureV3Strategy) {
    this._strategy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_data: cdktf.stringToTerraform(this._customData),
      desired_capacity: cdktf.numberToTerraform(this._desiredCapacity),
      max_size: cdktf.numberToTerraform(this._maxSize),
      min_size: cdktf.numberToTerraform(this._minSize),
      name: cdktf.stringToTerraform(this._name),
      od_sizes: cdktf.listMapper(cdktf.stringToTerraform)(this._odSizes),
      os: cdktf.stringToTerraform(this._os),
      region: cdktf.stringToTerraform(this._region),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      spot_sizes: cdktf.listMapper(cdktf.stringToTerraform)(this._spotSizes),
      image: cdktf.listMapper(elastigroupAzureV3ImageToTerraform)(this._image),
      login: elastigroupAzureV3LoginToTerraform(this._login.internalValue),
      managed_service_identity: cdktf.listMapper(elastigroupAzureV3ManagedServiceIdentityToTerraform)(this._managedServiceIdentity),
      network: elastigroupAzureV3NetworkToTerraform(this._network.internalValue),
      strategy: elastigroupAzureV3StrategyToTerraform(this._strategy.internalValue),
    };
  }
}

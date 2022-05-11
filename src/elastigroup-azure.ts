// https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElastigroupAzureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#custom_data ElastigroupAzure#custom_data}
  */
  readonly customData?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#desired_capacity ElastigroupAzure#desired_capacity}
  */
  readonly desiredCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#low_priority_sizes ElastigroupAzure#low_priority_sizes}
  */
  readonly lowPrioritySizes: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#max_size ElastigroupAzure#max_size}
  */
  readonly maxSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#min_size ElastigroupAzure#min_size}
  */
  readonly minSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#name ElastigroupAzure#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#od_sizes ElastigroupAzure#od_sizes}
  */
  readonly odSizes: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#product ElastigroupAzure#product}
  */
  readonly product: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#region ElastigroupAzure#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#resource_group_name ElastigroupAzure#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#shutdown_script ElastigroupAzure#shutdown_script}
  */
  readonly shutdownScript?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#user_data ElastigroupAzure#user_data}
  */
  readonly userData?: string;
  /**
  * health_check block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#health_check ElastigroupAzure#health_check}
  */
  readonly healthCheck?: ElastigroupAzureHealthCheck;
  /**
  * image block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#image ElastigroupAzure#image}
  */
  readonly image?: ElastigroupAzureImage[] | cdktf.IResolvable;
  /**
  * integration_kubernetes block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#integration_kubernetes ElastigroupAzure#integration_kubernetes}
  */
  readonly integrationKubernetes?: ElastigroupAzureIntegrationKubernetes;
  /**
  * integration_multai_runtime block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#integration_multai_runtime ElastigroupAzure#integration_multai_runtime}
  */
  readonly integrationMultaiRuntime?: ElastigroupAzureIntegrationMultaiRuntime;
  /**
  * load_balancers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#load_balancers ElastigroupAzure#load_balancers}
  */
  readonly loadBalancers?: ElastigroupAzureLoadBalancers[] | cdktf.IResolvable;
  /**
  * login block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#login ElastigroupAzure#login}
  */
  readonly login?: ElastigroupAzureLogin;
  /**
  * managed_service_identities block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#managed_service_identities ElastigroupAzure#managed_service_identities}
  */
  readonly managedServiceIdentities?: ElastigroupAzureManagedServiceIdentities[] | cdktf.IResolvable;
  /**
  * network block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#network ElastigroupAzure#network}
  */
  readonly network: ElastigroupAzureNetwork;
  /**
  * scaling_down_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#scaling_down_policy ElastigroupAzure#scaling_down_policy}
  */
  readonly scalingDownPolicy?: ElastigroupAzureScalingDownPolicy[] | cdktf.IResolvable;
  /**
  * scaling_up_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#scaling_up_policy ElastigroupAzure#scaling_up_policy}
  */
  readonly scalingUpPolicy?: ElastigroupAzureScalingUpPolicy[] | cdktf.IResolvable;
  /**
  * scheduled_task block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#scheduled_task ElastigroupAzure#scheduled_task}
  */
  readonly scheduledTask?: ElastigroupAzureScheduledTask[] | cdktf.IResolvable;
  /**
  * strategy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#strategy ElastigroupAzure#strategy}
  */
  readonly strategy: ElastigroupAzureStrategy;
  /**
  * update_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#update_policy ElastigroupAzure#update_policy}
  */
  readonly updatePolicy?: ElastigroupAzureUpdatePolicy;
}
export interface ElastigroupAzureHealthCheck {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#auto_healing ElastigroupAzure#auto_healing}
  */
  readonly autoHealing?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#grace_period ElastigroupAzure#grace_period}
  */
  readonly gracePeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#health_check_type ElastigroupAzure#health_check_type}
  */
  readonly healthCheckType: string;
}

export function elastigroupAzureHealthCheckToTerraform(struct?: ElastigroupAzureHealthCheckOutputReference | ElastigroupAzureHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_healing: cdktf.booleanToTerraform(struct!.autoHealing),
    grace_period: cdktf.numberToTerraform(struct!.gracePeriod),
    health_check_type: cdktf.stringToTerraform(struct!.healthCheckType),
  }
}

export class ElastigroupAzureHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAzureHealthCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoHealing !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoHealing = this._autoHealing;
    }
    if (this._gracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracePeriod = this._gracePeriod;
    }
    if (this._healthCheckType !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckType = this._healthCheckType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAzureHealthCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoHealing = undefined;
      this._gracePeriod = undefined;
      this._healthCheckType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoHealing = value.autoHealing;
      this._gracePeriod = value.gracePeriod;
      this._healthCheckType = value.healthCheckType;
    }
  }

  // auto_healing - computed: false, optional: true, required: false
  private _autoHealing?: boolean | cdktf.IResolvable; 
  public get autoHealing() {
    return this.getBooleanAttribute('auto_healing');
  }
  public set autoHealing(value: boolean | cdktf.IResolvable) {
    this._autoHealing = value;
  }
  public resetAutoHealing() {
    this._autoHealing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoHealingInput() {
    return this._autoHealing;
  }

  // grace_period - computed: false, optional: true, required: false
  private _gracePeriod?: number; 
  public get gracePeriod() {
    return this.getNumberAttribute('grace_period');
  }
  public set gracePeriod(value: number) {
    this._gracePeriod = value;
  }
  public resetGracePeriod() {
    this._gracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracePeriodInput() {
    return this._gracePeriod;
  }

  // health_check_type - computed: false, optional: false, required: true
  private _healthCheckType?: string; 
  public get healthCheckType() {
    return this.getStringAttribute('health_check_type');
  }
  public set healthCheckType(value: string) {
    this._healthCheckType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckTypeInput() {
    return this._healthCheckType;
  }
}
export interface ElastigroupAzureImageCustom {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#image_name ElastigroupAzure#image_name}
  */
  readonly imageName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#resource_group_name ElastigroupAzure#resource_group_name}
  */
  readonly resourceGroupName: string;
}

export function elastigroupAzureImageCustomToTerraform(struct?: ElastigroupAzureImageCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_name: cdktf.stringToTerraform(struct!.imageName),
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
  }
}

export interface ElastigroupAzureImageMarketplace {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#offer ElastigroupAzure#offer}
  */
  readonly offer: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#publisher ElastigroupAzure#publisher}
  */
  readonly publisher: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#sku ElastigroupAzure#sku}
  */
  readonly sku: string;
}

export function elastigroupAzureImageMarketplaceToTerraform(struct?: ElastigroupAzureImageMarketplace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    offer: cdktf.stringToTerraform(struct!.offer),
    publisher: cdktf.stringToTerraform(struct!.publisher),
    sku: cdktf.stringToTerraform(struct!.sku),
  }
}

export interface ElastigroupAzureImage {
  /**
  * custom block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#custom ElastigroupAzure#custom}
  */
  readonly custom?: ElastigroupAzureImageCustom[] | cdktf.IResolvable;
  /**
  * marketplace block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#marketplace ElastigroupAzure#marketplace}
  */
  readonly marketplace?: ElastigroupAzureImageMarketplace[] | cdktf.IResolvable;
}

export function elastigroupAzureImageToTerraform(struct?: ElastigroupAzureImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom: cdktf.listMapper(elastigroupAzureImageCustomToTerraform)(struct!.custom),
    marketplace: cdktf.listMapper(elastigroupAzureImageMarketplaceToTerraform)(struct!.marketplace),
  }
}

export interface ElastigroupAzureIntegrationKubernetes {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#cluster_identifier ElastigroupAzure#cluster_identifier}
  */
  readonly clusterIdentifier: string;
}

export function elastigroupAzureIntegrationKubernetesToTerraform(struct?: ElastigroupAzureIntegrationKubernetesOutputReference | ElastigroupAzureIntegrationKubernetes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_identifier: cdktf.stringToTerraform(struct!.clusterIdentifier),
  }
}

export class ElastigroupAzureIntegrationKubernetesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAzureIntegrationKubernetes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterIdentifier = this._clusterIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAzureIntegrationKubernetes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterIdentifier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterIdentifier = value.clusterIdentifier;
    }
  }

  // cluster_identifier - computed: false, optional: false, required: true
  private _clusterIdentifier?: string; 
  public get clusterIdentifier() {
    return this.getStringAttribute('cluster_identifier');
  }
  public set clusterIdentifier(value: string) {
    this._clusterIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdentifierInput() {
    return this._clusterIdentifier;
  }
}
export interface ElastigroupAzureIntegrationMultaiRuntime {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#deployment_id ElastigroupAzure#deployment_id}
  */
  readonly deploymentId: string;
}

export function elastigroupAzureIntegrationMultaiRuntimeToTerraform(struct?: ElastigroupAzureIntegrationMultaiRuntimeOutputReference | ElastigroupAzureIntegrationMultaiRuntime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deployment_id: cdktf.stringToTerraform(struct!.deploymentId),
  }
}

export class ElastigroupAzureIntegrationMultaiRuntimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAzureIntegrationMultaiRuntime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deploymentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentId = this._deploymentId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAzureIntegrationMultaiRuntime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deploymentId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deploymentId = value.deploymentId;
    }
  }

  // deployment_id - computed: false, optional: false, required: true
  private _deploymentId?: string; 
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }
  public set deploymentId(value: string) {
    this._deploymentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentIdInput() {
    return this._deploymentId;
  }
}
export interface ElastigroupAzureLoadBalancers {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#auto_weight ElastigroupAzure#auto_weight}
  */
  readonly autoWeight?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#balancer_id ElastigroupAzure#balancer_id}
  */
  readonly balancerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#target_set_id ElastigroupAzure#target_set_id}
  */
  readonly targetSetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#type ElastigroupAzure#type}
  */
  readonly type: string;
}

export function elastigroupAzureLoadBalancersToTerraform(struct?: ElastigroupAzureLoadBalancers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_weight: cdktf.booleanToTerraform(struct!.autoWeight),
    balancer_id: cdktf.stringToTerraform(struct!.balancerId),
    target_set_id: cdktf.stringToTerraform(struct!.targetSetId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface ElastigroupAzureLogin {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#password ElastigroupAzure#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#ssh_public_key ElastigroupAzure#ssh_public_key}
  */
  readonly sshPublicKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#user_name ElastigroupAzure#user_name}
  */
  readonly userName: string;
}

export function elastigroupAzureLoginToTerraform(struct?: ElastigroupAzureLoginOutputReference | ElastigroupAzureLogin): any {
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

export class ElastigroupAzureLoginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAzureLogin | undefined {
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

  public set internalValue(value: ElastigroupAzureLogin | undefined) {
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
export interface ElastigroupAzureManagedServiceIdentities {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#name ElastigroupAzure#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#resource_group_name ElastigroupAzure#resource_group_name}
  */
  readonly resourceGroupName: string;
}

export function elastigroupAzureManagedServiceIdentitiesToTerraform(struct?: ElastigroupAzureManagedServiceIdentities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
  }
}

export interface ElastigroupAzureNetworkAdditionalIpConfigs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#name ElastigroupAzure#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#private_ip_version ElastigroupAzure#private_ip_version}
  */
  readonly privateIpVersion?: string;
}

export function elastigroupAzureNetworkAdditionalIpConfigsToTerraform(struct?: ElastigroupAzureNetworkAdditionalIpConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    private_ip_version: cdktf.stringToTerraform(struct!.privateIpVersion),
  }
}

export interface ElastigroupAzureNetwork {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#assign_public_ip ElastigroupAzure#assign_public_ip}
  */
  readonly assignPublicIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#resource_group_name ElastigroupAzure#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#subnet_name ElastigroupAzure#subnet_name}
  */
  readonly subnetName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#virtual_network_name ElastigroupAzure#virtual_network_name}
  */
  readonly virtualNetworkName: string;
  /**
  * additional_ip_configs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#additional_ip_configs ElastigroupAzure#additional_ip_configs}
  */
  readonly additionalIpConfigs?: ElastigroupAzureNetworkAdditionalIpConfigs[] | cdktf.IResolvable;
}

export function elastigroupAzureNetworkToTerraform(struct?: ElastigroupAzureNetworkOutputReference | ElastigroupAzureNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assign_public_ip: cdktf.booleanToTerraform(struct!.assignPublicIp),
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
    subnet_name: cdktf.stringToTerraform(struct!.subnetName),
    virtual_network_name: cdktf.stringToTerraform(struct!.virtualNetworkName),
    additional_ip_configs: cdktf.listMapper(elastigroupAzureNetworkAdditionalIpConfigsToTerraform)(struct!.additionalIpConfigs),
  }
}

export class ElastigroupAzureNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAzureNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignPublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignPublicIp = this._assignPublicIp;
    }
    if (this._resourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupName = this._resourceGroupName;
    }
    if (this._subnetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetName = this._subnetName;
    }
    if (this._virtualNetworkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetworkName = this._virtualNetworkName;
    }
    if (this._additionalIpConfigs !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalIpConfigs = this._additionalIpConfigs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAzureNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._assignPublicIp = undefined;
      this._resourceGroupName = undefined;
      this._subnetName = undefined;
      this._virtualNetworkName = undefined;
      this._additionalIpConfigs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._assignPublicIp = value.assignPublicIp;
      this._resourceGroupName = value.resourceGroupName;
      this._subnetName = value.subnetName;
      this._virtualNetworkName = value.virtualNetworkName;
      this._additionalIpConfigs = value.additionalIpConfigs;
    }
  }

  // assign_public_ip - computed: false, optional: true, required: false
  private _assignPublicIp?: boolean | cdktf.IResolvable; 
  public get assignPublicIp() {
    return this.getBooleanAttribute('assign_public_ip');
  }
  public set assignPublicIp(value: boolean | cdktf.IResolvable) {
    this._assignPublicIp = value;
  }
  public resetAssignPublicIp() {
    this._assignPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignPublicIpInput() {
    return this._assignPublicIp;
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

  // subnet_name - computed: false, optional: false, required: true
  private _subnetName?: string; 
  public get subnetName() {
    return this.getStringAttribute('subnet_name');
  }
  public set subnetName(value: string) {
    this._subnetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetNameInput() {
    return this._subnetName;
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

  // additional_ip_configs - computed: false, optional: true, required: false
  private _additionalIpConfigs?: ElastigroupAzureNetworkAdditionalIpConfigs[] | cdktf.IResolvable; 
  public get additionalIpConfigs() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('additional_ip_configs');
  }
  public set additionalIpConfigs(value: ElastigroupAzureNetworkAdditionalIpConfigs[] | cdktf.IResolvable) {
    this._additionalIpConfigs = value;
  }
  public resetAdditionalIpConfigs() {
    this._additionalIpConfigs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalIpConfigsInput() {
    return this._additionalIpConfigs;
  }
}
export interface ElastigroupAzureScalingDownPolicyDimensions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#name ElastigroupAzure#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#value ElastigroupAzure#value}
  */
  readonly value?: string;
}

export function elastigroupAzureScalingDownPolicyDimensionsToTerraform(struct?: ElastigroupAzureScalingDownPolicyDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ElastigroupAzureScalingDownPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#action_type ElastigroupAzure#action_type}
  */
  readonly actionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#adjustment ElastigroupAzure#adjustment}
  */
  readonly adjustment?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#cooldown ElastigroupAzure#cooldown}
  */
  readonly cooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#evaluation_periods ElastigroupAzure#evaluation_periods}
  */
  readonly evaluationPeriods?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#max_target_capacity ElastigroupAzure#max_target_capacity}
  */
  readonly maxTargetCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#maximum ElastigroupAzure#maximum}
  */
  readonly maximum?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#metric_name ElastigroupAzure#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#min_target_capacity ElastigroupAzure#min_target_capacity}
  */
  readonly minTargetCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#minimum ElastigroupAzure#minimum}
  */
  readonly minimum?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#namespace ElastigroupAzure#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#operator ElastigroupAzure#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#period ElastigroupAzure#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#policy_name ElastigroupAzure#policy_name}
  */
  readonly policyName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#statistic ElastigroupAzure#statistic}
  */
  readonly statistic?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#target ElastigroupAzure#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#threshold ElastigroupAzure#threshold}
  */
  readonly threshold: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#unit ElastigroupAzure#unit}
  */
  readonly unit?: string;
  /**
  * dimensions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#dimensions ElastigroupAzure#dimensions}
  */
  readonly dimensions?: ElastigroupAzureScalingDownPolicyDimensions[] | cdktf.IResolvable;
}

export function elastigroupAzureScalingDownPolicyToTerraform(struct?: ElastigroupAzureScalingDownPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_type: cdktf.stringToTerraform(struct!.actionType),
    adjustment: cdktf.stringToTerraform(struct!.adjustment),
    cooldown: cdktf.numberToTerraform(struct!.cooldown),
    evaluation_periods: cdktf.numberToTerraform(struct!.evaluationPeriods),
    max_target_capacity: cdktf.stringToTerraform(struct!.maxTargetCapacity),
    maximum: cdktf.stringToTerraform(struct!.maximum),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    min_target_capacity: cdktf.stringToTerraform(struct!.minTargetCapacity),
    minimum: cdktf.stringToTerraform(struct!.minimum),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    operator: cdktf.stringToTerraform(struct!.operator),
    period: cdktf.numberToTerraform(struct!.period),
    policy_name: cdktf.stringToTerraform(struct!.policyName),
    statistic: cdktf.stringToTerraform(struct!.statistic),
    target: cdktf.stringToTerraform(struct!.target),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    unit: cdktf.stringToTerraform(struct!.unit),
    dimensions: cdktf.listMapper(elastigroupAzureScalingDownPolicyDimensionsToTerraform)(struct!.dimensions),
  }
}

export interface ElastigroupAzureScalingUpPolicyDimensions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#name ElastigroupAzure#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#value ElastigroupAzure#value}
  */
  readonly value?: string;
}

export function elastigroupAzureScalingUpPolicyDimensionsToTerraform(struct?: ElastigroupAzureScalingUpPolicyDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ElastigroupAzureScalingUpPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#action_type ElastigroupAzure#action_type}
  */
  readonly actionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#adjustment ElastigroupAzure#adjustment}
  */
  readonly adjustment?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#cooldown ElastigroupAzure#cooldown}
  */
  readonly cooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#evaluation_periods ElastigroupAzure#evaluation_periods}
  */
  readonly evaluationPeriods?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#max_target_capacity ElastigroupAzure#max_target_capacity}
  */
  readonly maxTargetCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#maximum ElastigroupAzure#maximum}
  */
  readonly maximum?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#metric_name ElastigroupAzure#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#min_target_capacity ElastigroupAzure#min_target_capacity}
  */
  readonly minTargetCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#minimum ElastigroupAzure#minimum}
  */
  readonly minimum?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#namespace ElastigroupAzure#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#operator ElastigroupAzure#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#period ElastigroupAzure#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#policy_name ElastigroupAzure#policy_name}
  */
  readonly policyName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#statistic ElastigroupAzure#statistic}
  */
  readonly statistic?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#target ElastigroupAzure#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#threshold ElastigroupAzure#threshold}
  */
  readonly threshold: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#unit ElastigroupAzure#unit}
  */
  readonly unit?: string;
  /**
  * dimensions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#dimensions ElastigroupAzure#dimensions}
  */
  readonly dimensions?: ElastigroupAzureScalingUpPolicyDimensions[] | cdktf.IResolvable;
}

export function elastigroupAzureScalingUpPolicyToTerraform(struct?: ElastigroupAzureScalingUpPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_type: cdktf.stringToTerraform(struct!.actionType),
    adjustment: cdktf.stringToTerraform(struct!.adjustment),
    cooldown: cdktf.numberToTerraform(struct!.cooldown),
    evaluation_periods: cdktf.numberToTerraform(struct!.evaluationPeriods),
    max_target_capacity: cdktf.stringToTerraform(struct!.maxTargetCapacity),
    maximum: cdktf.stringToTerraform(struct!.maximum),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    min_target_capacity: cdktf.stringToTerraform(struct!.minTargetCapacity),
    minimum: cdktf.stringToTerraform(struct!.minimum),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    operator: cdktf.stringToTerraform(struct!.operator),
    period: cdktf.numberToTerraform(struct!.period),
    policy_name: cdktf.stringToTerraform(struct!.policyName),
    statistic: cdktf.stringToTerraform(struct!.statistic),
    target: cdktf.stringToTerraform(struct!.target),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    unit: cdktf.stringToTerraform(struct!.unit),
    dimensions: cdktf.listMapper(elastigroupAzureScalingUpPolicyDimensionsToTerraform)(struct!.dimensions),
  }
}

export interface ElastigroupAzureScheduledTask {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#adjustment ElastigroupAzure#adjustment}
  */
  readonly adjustment?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#adjustment_percentage ElastigroupAzure#adjustment_percentage}
  */
  readonly adjustmentPercentage?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#batch_size_percentage ElastigroupAzure#batch_size_percentage}
  */
  readonly batchSizePercentage?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#cron_expression ElastigroupAzure#cron_expression}
  */
  readonly cronExpression: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#grace_period ElastigroupAzure#grace_period}
  */
  readonly gracePeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#is_enabled ElastigroupAzure#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#scale_max_capacity ElastigroupAzure#scale_max_capacity}
  */
  readonly scaleMaxCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#scale_min_capacity ElastigroupAzure#scale_min_capacity}
  */
  readonly scaleMinCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#scale_target_capacity ElastigroupAzure#scale_target_capacity}
  */
  readonly scaleTargetCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#task_type ElastigroupAzure#task_type}
  */
  readonly taskType: string;
}

export function elastigroupAzureScheduledTaskToTerraform(struct?: ElastigroupAzureScheduledTask | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adjustment: cdktf.stringToTerraform(struct!.adjustment),
    adjustment_percentage: cdktf.stringToTerraform(struct!.adjustmentPercentage),
    batch_size_percentage: cdktf.stringToTerraform(struct!.batchSizePercentage),
    cron_expression: cdktf.stringToTerraform(struct!.cronExpression),
    grace_period: cdktf.stringToTerraform(struct!.gracePeriod),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    scale_max_capacity: cdktf.stringToTerraform(struct!.scaleMaxCapacity),
    scale_min_capacity: cdktf.stringToTerraform(struct!.scaleMinCapacity),
    scale_target_capacity: cdktf.stringToTerraform(struct!.scaleTargetCapacity),
    task_type: cdktf.stringToTerraform(struct!.taskType),
  }
}

export interface ElastigroupAzureStrategy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#draining_timeout ElastigroupAzure#draining_timeout}
  */
  readonly drainingTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#low_priority_percentage ElastigroupAzure#low_priority_percentage}
  */
  readonly lowPriorityPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#od_count ElastigroupAzure#od_count}
  */
  readonly odCount?: number;
}

export function elastigroupAzureStrategyToTerraform(struct?: ElastigroupAzureStrategyOutputReference | ElastigroupAzureStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    draining_timeout: cdktf.numberToTerraform(struct!.drainingTimeout),
    low_priority_percentage: cdktf.numberToTerraform(struct!.lowPriorityPercentage),
    od_count: cdktf.numberToTerraform(struct!.odCount),
  }
}

export class ElastigroupAzureStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAzureStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._drainingTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.drainingTimeout = this._drainingTimeout;
    }
    if (this._lowPriorityPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowPriorityPercentage = this._lowPriorityPercentage;
    }
    if (this._odCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.odCount = this._odCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAzureStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._drainingTimeout = undefined;
      this._lowPriorityPercentage = undefined;
      this._odCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._drainingTimeout = value.drainingTimeout;
      this._lowPriorityPercentage = value.lowPriorityPercentage;
      this._odCount = value.odCount;
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

  // low_priority_percentage - computed: false, optional: true, required: false
  private _lowPriorityPercentage?: number; 
  public get lowPriorityPercentage() {
    return this.getNumberAttribute('low_priority_percentage');
  }
  public set lowPriorityPercentage(value: number) {
    this._lowPriorityPercentage = value;
  }
  public resetLowPriorityPercentage() {
    this._lowPriorityPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowPriorityPercentageInput() {
    return this._lowPriorityPercentage;
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
}
export interface ElastigroupAzureUpdatePolicyRollConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#batch_size_percentage ElastigroupAzure#batch_size_percentage}
  */
  readonly batchSizePercentage: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#grace_period ElastigroupAzure#grace_period}
  */
  readonly gracePeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#health_check_type ElastigroupAzure#health_check_type}
  */
  readonly healthCheckType?: string;
}

export function elastigroupAzureUpdatePolicyRollConfigToTerraform(struct?: ElastigroupAzureUpdatePolicyRollConfigOutputReference | ElastigroupAzureUpdatePolicyRollConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_size_percentage: cdktf.numberToTerraform(struct!.batchSizePercentage),
    grace_period: cdktf.numberToTerraform(struct!.gracePeriod),
    health_check_type: cdktf.stringToTerraform(struct!.healthCheckType),
  }
}

export class ElastigroupAzureUpdatePolicyRollConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAzureUpdatePolicyRollConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchSizePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSizePercentage = this._batchSizePercentage;
    }
    if (this._gracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracePeriod = this._gracePeriod;
    }
    if (this._healthCheckType !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckType = this._healthCheckType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAzureUpdatePolicyRollConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._batchSizePercentage = undefined;
      this._gracePeriod = undefined;
      this._healthCheckType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._batchSizePercentage = value.batchSizePercentage;
      this._gracePeriod = value.gracePeriod;
      this._healthCheckType = value.healthCheckType;
    }
  }

  // batch_size_percentage - computed: false, optional: false, required: true
  private _batchSizePercentage?: number; 
  public get batchSizePercentage() {
    return this.getNumberAttribute('batch_size_percentage');
  }
  public set batchSizePercentage(value: number) {
    this._batchSizePercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizePercentageInput() {
    return this._batchSizePercentage;
  }

  // grace_period - computed: false, optional: true, required: false
  private _gracePeriod?: number; 
  public get gracePeriod() {
    return this.getNumberAttribute('grace_period');
  }
  public set gracePeriod(value: number) {
    this._gracePeriod = value;
  }
  public resetGracePeriod() {
    this._gracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracePeriodInput() {
    return this._gracePeriod;
  }

  // health_check_type - computed: false, optional: true, required: false
  private _healthCheckType?: string; 
  public get healthCheckType() {
    return this.getStringAttribute('health_check_type');
  }
  public set healthCheckType(value: string) {
    this._healthCheckType = value;
  }
  public resetHealthCheckType() {
    this._healthCheckType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckTypeInput() {
    return this._healthCheckType;
  }
}
export interface ElastigroupAzureUpdatePolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#should_roll ElastigroupAzure#should_roll}
  */
  readonly shouldRoll: boolean | cdktf.IResolvable;
  /**
  * roll_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure#roll_config ElastigroupAzure#roll_config}
  */
  readonly rollConfig?: ElastigroupAzureUpdatePolicyRollConfig;
}

export function elastigroupAzureUpdatePolicyToTerraform(struct?: ElastigroupAzureUpdatePolicyOutputReference | ElastigroupAzureUpdatePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    should_roll: cdktf.booleanToTerraform(struct!.shouldRoll),
    roll_config: elastigroupAzureUpdatePolicyRollConfigToTerraform(struct!.rollConfig),
  }
}

export class ElastigroupAzureUpdatePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAzureUpdatePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shouldRoll !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldRoll = this._shouldRoll;
    }
    if (this._rollConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollConfig = this._rollConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAzureUpdatePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._shouldRoll = undefined;
      this._rollConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._shouldRoll = value.shouldRoll;
      this._rollConfig.internalValue = value.rollConfig;
    }
  }

  // should_roll - computed: false, optional: false, required: true
  private _shouldRoll?: boolean | cdktf.IResolvable; 
  public get shouldRoll() {
    return this.getBooleanAttribute('should_roll');
  }
  public set shouldRoll(value: boolean | cdktf.IResolvable) {
    this._shouldRoll = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldRollInput() {
    return this._shouldRoll;
  }

  // roll_config - computed: false, optional: true, required: false
  private _rollConfig = new ElastigroupAzureUpdatePolicyRollConfigOutputReference(this, "roll_config");
  public get rollConfig() {
    return this._rollConfig;
  }
  public putRollConfig(value: ElastigroupAzureUpdatePolicyRollConfig) {
    this._rollConfig.internalValue = value;
  }
  public resetRollConfig() {
    this._rollConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollConfigInput() {
    return this._rollConfig.internalValue;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure spotinst_elastigroup_azure}
*/
export class ElastigroupAzure extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spotinst_elastigroup_azure";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_azure spotinst_elastigroup_azure} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElastigroupAzureConfig
  */
  public constructor(scope: Construct, id: string, config: ElastigroupAzureConfig) {
    super(scope, id, {
      terraformResourceType: 'spotinst_elastigroup_azure',
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
    this._lowPrioritySizes = config.lowPrioritySizes;
    this._maxSize = config.maxSize;
    this._minSize = config.minSize;
    this._name = config.name;
    this._odSizes = config.odSizes;
    this._product = config.product;
    this._region = config.region;
    this._resourceGroupName = config.resourceGroupName;
    this._shutdownScript = config.shutdownScript;
    this._userData = config.userData;
    this._healthCheck.internalValue = config.healthCheck;
    this._image = config.image;
    this._integrationKubernetes.internalValue = config.integrationKubernetes;
    this._integrationMultaiRuntime.internalValue = config.integrationMultaiRuntime;
    this._loadBalancers = config.loadBalancers;
    this._login.internalValue = config.login;
    this._managedServiceIdentities = config.managedServiceIdentities;
    this._network.internalValue = config.network;
    this._scalingDownPolicy = config.scalingDownPolicy;
    this._scalingUpPolicy = config.scalingUpPolicy;
    this._scheduledTask = config.scheduledTask;
    this._strategy.internalValue = config.strategy;
    this._updatePolicy.internalValue = config.updatePolicy;
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

  // low_priority_sizes - computed: false, optional: false, required: true
  private _lowPrioritySizes?: string[]; 
  public get lowPrioritySizes() {
    return this.getListAttribute('low_priority_sizes');
  }
  public set lowPrioritySizes(value: string[]) {
    this._lowPrioritySizes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lowPrioritySizesInput() {
    return this._lowPrioritySizes;
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

  // product - computed: false, optional: false, required: true
  private _product?: string; 
  public get product() {
    return this.getStringAttribute('product');
  }
  public set product(value: string) {
    this._product = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product;
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

  // shutdown_script - computed: false, optional: true, required: false
  private _shutdownScript?: string; 
  public get shutdownScript() {
    return this.getStringAttribute('shutdown_script');
  }
  public set shutdownScript(value: string) {
    this._shutdownScript = value;
  }
  public resetShutdownScript() {
    this._shutdownScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownScriptInput() {
    return this._shutdownScript;
  }

  // user_data - computed: false, optional: true, required: false
  private _userData?: string; 
  public get userData() {
    return this.getStringAttribute('user_data');
  }
  public set userData(value: string) {
    this._userData = value;
  }
  public resetUserData() {
    this._userData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData;
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck = new ElastigroupAzureHealthCheckOutputReference(this, "health_check");
  public get healthCheck() {
    return this._healthCheck;
  }
  public putHealthCheck(value: ElastigroupAzureHealthCheck) {
    this._healthCheck.internalValue = value;
  }
  public resetHealthCheck() {
    this._healthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck.internalValue;
  }

  // image - computed: false, optional: true, required: false
  private _image?: ElastigroupAzureImage[] | cdktf.IResolvable; 
  public get image() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('image');
  }
  public set image(value: ElastigroupAzureImage[] | cdktf.IResolvable) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // integration_kubernetes - computed: false, optional: true, required: false
  private _integrationKubernetes = new ElastigroupAzureIntegrationKubernetesOutputReference(this, "integration_kubernetes");
  public get integrationKubernetes() {
    return this._integrationKubernetes;
  }
  public putIntegrationKubernetes(value: ElastigroupAzureIntegrationKubernetes) {
    this._integrationKubernetes.internalValue = value;
  }
  public resetIntegrationKubernetes() {
    this._integrationKubernetes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationKubernetesInput() {
    return this._integrationKubernetes.internalValue;
  }

  // integration_multai_runtime - computed: false, optional: true, required: false
  private _integrationMultaiRuntime = new ElastigroupAzureIntegrationMultaiRuntimeOutputReference(this, "integration_multai_runtime");
  public get integrationMultaiRuntime() {
    return this._integrationMultaiRuntime;
  }
  public putIntegrationMultaiRuntime(value: ElastigroupAzureIntegrationMultaiRuntime) {
    this._integrationMultaiRuntime.internalValue = value;
  }
  public resetIntegrationMultaiRuntime() {
    this._integrationMultaiRuntime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationMultaiRuntimeInput() {
    return this._integrationMultaiRuntime.internalValue;
  }

  // load_balancers - computed: false, optional: true, required: false
  private _loadBalancers?: ElastigroupAzureLoadBalancers[] | cdktf.IResolvable; 
  public get loadBalancers() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('load_balancers')));
  }
  public set loadBalancers(value: ElastigroupAzureLoadBalancers[] | cdktf.IResolvable) {
    this._loadBalancers = value;
  }
  public resetLoadBalancers() {
    this._loadBalancers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancersInput() {
    return this._loadBalancers;
  }

  // login - computed: false, optional: true, required: false
  private _login = new ElastigroupAzureLoginOutputReference(this, "login");
  public get login() {
    return this._login;
  }
  public putLogin(value: ElastigroupAzureLogin) {
    this._login.internalValue = value;
  }
  public resetLogin() {
    this._login.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginInput() {
    return this._login.internalValue;
  }

  // managed_service_identities - computed: false, optional: true, required: false
  private _managedServiceIdentities?: ElastigroupAzureManagedServiceIdentities[] | cdktf.IResolvable; 
  public get managedServiceIdentities() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('managed_service_identities')));
  }
  public set managedServiceIdentities(value: ElastigroupAzureManagedServiceIdentities[] | cdktf.IResolvable) {
    this._managedServiceIdentities = value;
  }
  public resetManagedServiceIdentities() {
    this._managedServiceIdentities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedServiceIdentitiesInput() {
    return this._managedServiceIdentities;
  }

  // network - computed: false, optional: false, required: true
  private _network = new ElastigroupAzureNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: ElastigroupAzureNetwork) {
    this._network.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // scaling_down_policy - computed: false, optional: true, required: false
  private _scalingDownPolicy?: ElastigroupAzureScalingDownPolicy[] | cdktf.IResolvable; 
  public get scalingDownPolicy() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('scaling_down_policy')));
  }
  public set scalingDownPolicy(value: ElastigroupAzureScalingDownPolicy[] | cdktf.IResolvable) {
    this._scalingDownPolicy = value;
  }
  public resetScalingDownPolicy() {
    this._scalingDownPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingDownPolicyInput() {
    return this._scalingDownPolicy;
  }

  // scaling_up_policy - computed: false, optional: true, required: false
  private _scalingUpPolicy?: ElastigroupAzureScalingUpPolicy[] | cdktf.IResolvable; 
  public get scalingUpPolicy() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('scaling_up_policy')));
  }
  public set scalingUpPolicy(value: ElastigroupAzureScalingUpPolicy[] | cdktf.IResolvable) {
    this._scalingUpPolicy = value;
  }
  public resetScalingUpPolicy() {
    this._scalingUpPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingUpPolicyInput() {
    return this._scalingUpPolicy;
  }

  // scheduled_task - computed: false, optional: true, required: false
  private _scheduledTask?: ElastigroupAzureScheduledTask[] | cdktf.IResolvable; 
  public get scheduledTask() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('scheduled_task')));
  }
  public set scheduledTask(value: ElastigroupAzureScheduledTask[] | cdktf.IResolvable) {
    this._scheduledTask = value;
  }
  public resetScheduledTask() {
    this._scheduledTask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledTaskInput() {
    return this._scheduledTask;
  }

  // strategy - computed: false, optional: false, required: true
  private _strategy = new ElastigroupAzureStrategyOutputReference(this, "strategy");
  public get strategy() {
    return this._strategy;
  }
  public putStrategy(value: ElastigroupAzureStrategy) {
    this._strategy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy.internalValue;
  }

  // update_policy - computed: false, optional: true, required: false
  private _updatePolicy = new ElastigroupAzureUpdatePolicyOutputReference(this, "update_policy");
  public get updatePolicy() {
    return this._updatePolicy;
  }
  public putUpdatePolicy(value: ElastigroupAzureUpdatePolicy) {
    this._updatePolicy.internalValue = value;
  }
  public resetUpdatePolicy() {
    this._updatePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatePolicyInput() {
    return this._updatePolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_data: cdktf.stringToTerraform(this._customData),
      desired_capacity: cdktf.numberToTerraform(this._desiredCapacity),
      low_priority_sizes: cdktf.listMapper(cdktf.stringToTerraform)(this._lowPrioritySizes),
      max_size: cdktf.numberToTerraform(this._maxSize),
      min_size: cdktf.numberToTerraform(this._minSize),
      name: cdktf.stringToTerraform(this._name),
      od_sizes: cdktf.listMapper(cdktf.stringToTerraform)(this._odSizes),
      product: cdktf.stringToTerraform(this._product),
      region: cdktf.stringToTerraform(this._region),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      shutdown_script: cdktf.stringToTerraform(this._shutdownScript),
      user_data: cdktf.stringToTerraform(this._userData),
      health_check: elastigroupAzureHealthCheckToTerraform(this._healthCheck.internalValue),
      image: cdktf.listMapper(elastigroupAzureImageToTerraform)(this._image),
      integration_kubernetes: elastigroupAzureIntegrationKubernetesToTerraform(this._integrationKubernetes.internalValue),
      integration_multai_runtime: elastigroupAzureIntegrationMultaiRuntimeToTerraform(this._integrationMultaiRuntime.internalValue),
      load_balancers: cdktf.listMapper(elastigroupAzureLoadBalancersToTerraform)(this._loadBalancers),
      login: elastigroupAzureLoginToTerraform(this._login.internalValue),
      managed_service_identities: cdktf.listMapper(elastigroupAzureManagedServiceIdentitiesToTerraform)(this._managedServiceIdentities),
      network: elastigroupAzureNetworkToTerraform(this._network.internalValue),
      scaling_down_policy: cdktf.listMapper(elastigroupAzureScalingDownPolicyToTerraform)(this._scalingDownPolicy),
      scaling_up_policy: cdktf.listMapper(elastigroupAzureScalingUpPolicyToTerraform)(this._scalingUpPolicy),
      scheduled_task: cdktf.listMapper(elastigroupAzureScheduledTaskToTerraform)(this._scheduledTask),
      strategy: elastigroupAzureStrategyToTerraform(this._strategy.internalValue),
      update_policy: elastigroupAzureUpdatePolicyToTerraform(this._updatePolicy.internalValue),
    };
  }
}

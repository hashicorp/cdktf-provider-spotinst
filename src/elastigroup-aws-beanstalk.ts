// https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws_beanstalk
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElastigroupAwsBeanstalkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws_beanstalk#beanstalk_environment_id ElastigroupAwsBeanstalk#beanstalk_environment_id}
  */
  readonly beanstalkEnvironmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws_beanstalk#beanstalk_environment_name ElastigroupAwsBeanstalk#beanstalk_environment_name}
  */
  readonly beanstalkEnvironmentName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws_beanstalk#desired_capacity ElastigroupAwsBeanstalk#desired_capacity}
  */
  readonly desiredCapacity: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws_beanstalk#instance_types_spot ElastigroupAwsBeanstalk#instance_types_spot}
  */
  readonly instanceTypesSpot: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws_beanstalk#maintenance ElastigroupAwsBeanstalk#maintenance}
  */
  readonly maintenance?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws_beanstalk#max_size ElastigroupAwsBeanstalk#max_size}
  */
  readonly maxSize: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws_beanstalk#min_size ElastigroupAwsBeanstalk#min_size}
  */
  readonly minSize: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws_beanstalk#name ElastigroupAwsBeanstalk#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws_beanstalk#product ElastigroupAwsBeanstalk#product}
  */
  readonly product: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws_beanstalk#region ElastigroupAwsBeanstalk#region}
  */
  readonly region: string;
  /**
  * deployment_preferences block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws_beanstalk#deployment_preferences ElastigroupAwsBeanstalk#deployment_preferences}
  */
  readonly deploymentPreferences?: ElastigroupAwsBeanstalkDeploymentPreferences;
  /**
  * managed_actions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws_beanstalk#managed_actions ElastigroupAwsBeanstalk#managed_actions}
  */
  readonly managedActions?: ElastigroupAwsBeanstalkManagedActions;
  /**
  * scheduled_task block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws_beanstalk#scheduled_task ElastigroupAwsBeanstalk#scheduled_task}
  */
  readonly scheduledTask?: ElastigroupAwsBeanstalkScheduledTask[] | cdktf.IResolvable;
}
export interface ElastigroupAwsBeanstalkDeploymentPreferencesStrategy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws_beanstalk#action ElastigroupAwsBeanstalk#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws_beanstalk#should_drain_instances ElastigroupAwsBeanstalk#should_drain_instances}
  */
  readonly shouldDrainInstances?: boolean | cdktf.IResolvable;
}

export function elastigroupAwsBeanstalkDeploymentPreferencesStrategyToTerraform(struct?: ElastigroupAwsBeanstalkDeploymentPreferencesStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    should_drain_instances: cdktf.booleanToTerraform(struct!.shouldDrainInstances),
  }
}

export interface ElastigroupAwsBeanstalkDeploymentPreferences {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws_beanstalk#automatic_roll ElastigroupAwsBeanstalk#automatic_roll}
  */
  readonly automaticRoll?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws_beanstalk#batch_size_percentage ElastigroupAwsBeanstalk#batch_size_percentage}
  */
  readonly batchSizePercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws_beanstalk#grace_period ElastigroupAwsBeanstalk#grace_period}
  */
  readonly gracePeriod?: number;
  /**
  * strategy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws_beanstalk#strategy ElastigroupAwsBeanstalk#strategy}
  */
  readonly strategy?: ElastigroupAwsBeanstalkDeploymentPreferencesStrategy[] | cdktf.IResolvable;
}

export function elastigroupAwsBeanstalkDeploymentPreferencesToTerraform(struct?: ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference | ElastigroupAwsBeanstalkDeploymentPreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automatic_roll: cdktf.booleanToTerraform(struct!.automaticRoll),
    batch_size_percentage: cdktf.numberToTerraform(struct!.batchSizePercentage),
    grace_period: cdktf.numberToTerraform(struct!.gracePeriod),
    strategy: cdktf.listMapper(elastigroupAwsBeanstalkDeploymentPreferencesStrategyToTerraform)(struct!.strategy),
  }
}

export class ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsBeanstalkDeploymentPreferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automaticRoll !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticRoll = this._automaticRoll;
    }
    if (this._batchSizePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSizePercentage = this._batchSizePercentage;
    }
    if (this._gracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracePeriod = this._gracePeriod;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsBeanstalkDeploymentPreferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._automaticRoll = undefined;
      this._batchSizePercentage = undefined;
      this._gracePeriod = undefined;
      this._strategy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._automaticRoll = value.automaticRoll;
      this._batchSizePercentage = value.batchSizePercentage;
      this._gracePeriod = value.gracePeriod;
      this._strategy = value.strategy;
    }
  }

  // automatic_roll - computed: false, optional: true, required: false
  private _automaticRoll?: boolean | cdktf.IResolvable; 
  public get automaticRoll() {
    return this.getBooleanAttribute('automatic_roll');
  }
  public set automaticRoll(value: boolean | cdktf.IResolvable) {
    this._automaticRoll = value;
  }
  public resetAutomaticRoll() {
    this._automaticRoll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticRollInput() {
    return this._automaticRoll;
  }

  // batch_size_percentage - computed: false, optional: true, required: false
  private _batchSizePercentage?: number; 
  public get batchSizePercentage() {
    return this.getNumberAttribute('batch_size_percentage');
  }
  public set batchSizePercentage(value: number) {
    this._batchSizePercentage = value;
  }
  public resetBatchSizePercentage() {
    this._batchSizePercentage = undefined;
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

  // strategy - computed: false, optional: true, required: false
  private _strategy?: ElastigroupAwsBeanstalkDeploymentPreferencesStrategy[] | cdktf.IResolvable; 
  public get strategy() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('strategy');
  }
  public set strategy(value: ElastigroupAwsBeanstalkDeploymentPreferencesStrategy[] | cdktf.IResolvable) {
    this._strategy = value;
  }
  public resetStrategy() {
    this._strategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }
}
export interface ElastigroupAwsBeanstalkManagedActionsPlatformUpdate {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws_beanstalk#perform_at ElastigroupAwsBeanstalk#perform_at}
  */
  readonly performAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws_beanstalk#time_window ElastigroupAwsBeanstalk#time_window}
  */
  readonly timeWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws_beanstalk#update_level ElastigroupAwsBeanstalk#update_level}
  */
  readonly updateLevel?: string;
}

export function elastigroupAwsBeanstalkManagedActionsPlatformUpdateToTerraform(struct?: ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference | ElastigroupAwsBeanstalkManagedActionsPlatformUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    perform_at: cdktf.stringToTerraform(struct!.performAt),
    time_window: cdktf.stringToTerraform(struct!.timeWindow),
    update_level: cdktf.stringToTerraform(struct!.updateLevel),
  }
}

export class ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsBeanstalkManagedActionsPlatformUpdate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._performAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.performAt = this._performAt;
    }
    if (this._timeWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeWindow = this._timeWindow;
    }
    if (this._updateLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateLevel = this._updateLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsBeanstalkManagedActionsPlatformUpdate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._performAt = undefined;
      this._timeWindow = undefined;
      this._updateLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._performAt = value.performAt;
      this._timeWindow = value.timeWindow;
      this._updateLevel = value.updateLevel;
    }
  }

  // perform_at - computed: false, optional: true, required: false
  private _performAt?: string; 
  public get performAt() {
    return this.getStringAttribute('perform_at');
  }
  public set performAt(value: string) {
    this._performAt = value;
  }
  public resetPerformAt() {
    this._performAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performAtInput() {
    return this._performAt;
  }

  // time_window - computed: false, optional: true, required: false
  private _timeWindow?: string; 
  public get timeWindow() {
    return this.getStringAttribute('time_window');
  }
  public set timeWindow(value: string) {
    this._timeWindow = value;
  }
  public resetTimeWindow() {
    this._timeWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowInput() {
    return this._timeWindow;
  }

  // update_level - computed: false, optional: true, required: false
  private _updateLevel?: string; 
  public get updateLevel() {
    return this.getStringAttribute('update_level');
  }
  public set updateLevel(value: string) {
    this._updateLevel = value;
  }
  public resetUpdateLevel() {
    this._updateLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateLevelInput() {
    return this._updateLevel;
  }
}
export interface ElastigroupAwsBeanstalkManagedActions {
  /**
  * platform_update block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws_beanstalk#platform_update ElastigroupAwsBeanstalk#platform_update}
  */
  readonly platformUpdate?: ElastigroupAwsBeanstalkManagedActionsPlatformUpdate;
}

export function elastigroupAwsBeanstalkManagedActionsToTerraform(struct?: ElastigroupAwsBeanstalkManagedActionsOutputReference | ElastigroupAwsBeanstalkManagedActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    platform_update: elastigroupAwsBeanstalkManagedActionsPlatformUpdateToTerraform(struct!.platformUpdate),
  }
}

export class ElastigroupAwsBeanstalkManagedActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastigroupAwsBeanstalkManagedActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._platformUpdate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.platformUpdate = this._platformUpdate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastigroupAwsBeanstalkManagedActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._platformUpdate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._platformUpdate.internalValue = value.platformUpdate;
    }
  }

  // platform_update - computed: false, optional: true, required: false
  private _platformUpdate = new ElastigroupAwsBeanstalkManagedActionsPlatformUpdateOutputReference(this, "platform_update");
  public get platformUpdate() {
    return this._platformUpdate;
  }
  public putPlatformUpdate(value: ElastigroupAwsBeanstalkManagedActionsPlatformUpdate) {
    this._platformUpdate.internalValue = value;
  }
  public resetPlatformUpdate() {
    this._platformUpdate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformUpdateInput() {
    return this._platformUpdate.internalValue;
  }
}
export interface ElastigroupAwsBeanstalkScheduledTask {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws_beanstalk#adjustment ElastigroupAwsBeanstalk#adjustment}
  */
  readonly adjustment?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws_beanstalk#adjustment_percentage ElastigroupAwsBeanstalk#adjustment_percentage}
  */
  readonly adjustmentPercentage?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws_beanstalk#batch_size_percentage ElastigroupAwsBeanstalk#batch_size_percentage}
  */
  readonly batchSizePercentage?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws_beanstalk#cron_expression ElastigroupAwsBeanstalk#cron_expression}
  */
  readonly cronExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws_beanstalk#frequency ElastigroupAwsBeanstalk#frequency}
  */
  readonly frequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws_beanstalk#grace_period ElastigroupAwsBeanstalk#grace_period}
  */
  readonly gracePeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws_beanstalk#is_enabled ElastigroupAwsBeanstalk#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws_beanstalk#max_capacity ElastigroupAwsBeanstalk#max_capacity}
  */
  readonly maxCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws_beanstalk#min_capacity ElastigroupAwsBeanstalk#min_capacity}
  */
  readonly minCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws_beanstalk#scale_max_capacity ElastigroupAwsBeanstalk#scale_max_capacity}
  */
  readonly scaleMaxCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws_beanstalk#scale_min_capacity ElastigroupAwsBeanstalk#scale_min_capacity}
  */
  readonly scaleMinCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws_beanstalk#scale_target_capacity ElastigroupAwsBeanstalk#scale_target_capacity}
  */
  readonly scaleTargetCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws_beanstalk#start_time ElastigroupAwsBeanstalk#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws_beanstalk#target_capacity ElastigroupAwsBeanstalk#target_capacity}
  */
  readonly targetCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws_beanstalk#task_type ElastigroupAwsBeanstalk#task_type}
  */
  readonly taskType: string;
}

export function elastigroupAwsBeanstalkScheduledTaskToTerraform(struct?: ElastigroupAwsBeanstalkScheduledTask | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adjustment: cdktf.stringToTerraform(struct!.adjustment),
    adjustment_percentage: cdktf.stringToTerraform(struct!.adjustmentPercentage),
    batch_size_percentage: cdktf.stringToTerraform(struct!.batchSizePercentage),
    cron_expression: cdktf.stringToTerraform(struct!.cronExpression),
    frequency: cdktf.stringToTerraform(struct!.frequency),
    grace_period: cdktf.stringToTerraform(struct!.gracePeriod),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    max_capacity: cdktf.stringToTerraform(struct!.maxCapacity),
    min_capacity: cdktf.stringToTerraform(struct!.minCapacity),
    scale_max_capacity: cdktf.stringToTerraform(struct!.scaleMaxCapacity),
    scale_min_capacity: cdktf.stringToTerraform(struct!.scaleMinCapacity),
    scale_target_capacity: cdktf.stringToTerraform(struct!.scaleTargetCapacity),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    target_capacity: cdktf.stringToTerraform(struct!.targetCapacity),
    task_type: cdktf.stringToTerraform(struct!.taskType),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws_beanstalk spotinst_elastigroup_aws_beanstalk}
*/
export class ElastigroupAwsBeanstalk extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spotinst_elastigroup_aws_beanstalk";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/spotinst/r/elastigroup_aws_beanstalk spotinst_elastigroup_aws_beanstalk} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElastigroupAwsBeanstalkConfig
  */
  public constructor(scope: Construct, id: string, config: ElastigroupAwsBeanstalkConfig) {
    super(scope, id, {
      terraformResourceType: 'spotinst_elastigroup_aws_beanstalk',
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
    this._beanstalkEnvironmentId = config.beanstalkEnvironmentId;
    this._beanstalkEnvironmentName = config.beanstalkEnvironmentName;
    this._desiredCapacity = config.desiredCapacity;
    this._instanceTypesSpot = config.instanceTypesSpot;
    this._maintenance = config.maintenance;
    this._maxSize = config.maxSize;
    this._minSize = config.minSize;
    this._name = config.name;
    this._product = config.product;
    this._region = config.region;
    this._deploymentPreferences.internalValue = config.deploymentPreferences;
    this._managedActions.internalValue = config.managedActions;
    this._scheduledTask = config.scheduledTask;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // beanstalk_environment_id - computed: false, optional: true, required: false
  private _beanstalkEnvironmentId?: string; 
  public get beanstalkEnvironmentId() {
    return this.getStringAttribute('beanstalk_environment_id');
  }
  public set beanstalkEnvironmentId(value: string) {
    this._beanstalkEnvironmentId = value;
  }
  public resetBeanstalkEnvironmentId() {
    this._beanstalkEnvironmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beanstalkEnvironmentIdInput() {
    return this._beanstalkEnvironmentId;
  }

  // beanstalk_environment_name - computed: false, optional: true, required: false
  private _beanstalkEnvironmentName?: string; 
  public get beanstalkEnvironmentName() {
    return this.getStringAttribute('beanstalk_environment_name');
  }
  public set beanstalkEnvironmentName(value: string) {
    this._beanstalkEnvironmentName = value;
  }
  public resetBeanstalkEnvironmentName() {
    this._beanstalkEnvironmentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beanstalkEnvironmentNameInput() {
    return this._beanstalkEnvironmentName;
  }

  // desired_capacity - computed: false, optional: false, required: true
  private _desiredCapacity?: number; 
  public get desiredCapacity() {
    return this.getNumberAttribute('desired_capacity');
  }
  public set desiredCapacity(value: number) {
    this._desiredCapacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredCapacityInput() {
    return this._desiredCapacity;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_types_spot - computed: false, optional: false, required: true
  private _instanceTypesSpot?: string[]; 
  public get instanceTypesSpot() {
    return this.getListAttribute('instance_types_spot');
  }
  public set instanceTypesSpot(value: string[]) {
    this._instanceTypesSpot = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypesSpotInput() {
    return this._instanceTypesSpot;
  }

  // maintenance - computed: false, optional: true, required: false
  private _maintenance?: string; 
  public get maintenance() {
    return this.getStringAttribute('maintenance');
  }
  public set maintenance(value: string) {
    this._maintenance = value;
  }
  public resetMaintenance() {
    this._maintenance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceInput() {
    return this._maintenance;
  }

  // max_size - computed: false, optional: false, required: true
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // min_size - computed: false, optional: false, required: true
  private _minSize?: number; 
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }
  public set minSize(value: number) {
    this._minSize = value;
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

  // deployment_preferences - computed: false, optional: true, required: false
  private _deploymentPreferences = new ElastigroupAwsBeanstalkDeploymentPreferencesOutputReference(this, "deployment_preferences");
  public get deploymentPreferences() {
    return this._deploymentPreferences;
  }
  public putDeploymentPreferences(value: ElastigroupAwsBeanstalkDeploymentPreferences) {
    this._deploymentPreferences.internalValue = value;
  }
  public resetDeploymentPreferences() {
    this._deploymentPreferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentPreferencesInput() {
    return this._deploymentPreferences.internalValue;
  }

  // managed_actions - computed: false, optional: true, required: false
  private _managedActions = new ElastigroupAwsBeanstalkManagedActionsOutputReference(this, "managed_actions");
  public get managedActions() {
    return this._managedActions;
  }
  public putManagedActions(value: ElastigroupAwsBeanstalkManagedActions) {
    this._managedActions.internalValue = value;
  }
  public resetManagedActions() {
    this._managedActions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedActionsInput() {
    return this._managedActions.internalValue;
  }

  // scheduled_task - computed: false, optional: true, required: false
  private _scheduledTask?: ElastigroupAwsBeanstalkScheduledTask[] | cdktf.IResolvable; 
  public get scheduledTask() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('scheduled_task')));
  }
  public set scheduledTask(value: ElastigroupAwsBeanstalkScheduledTask[] | cdktf.IResolvable) {
    this._scheduledTask = value;
  }
  public resetScheduledTask() {
    this._scheduledTask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledTaskInput() {
    return this._scheduledTask;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      beanstalk_environment_id: cdktf.stringToTerraform(this._beanstalkEnvironmentId),
      beanstalk_environment_name: cdktf.stringToTerraform(this._beanstalkEnvironmentName),
      desired_capacity: cdktf.numberToTerraform(this._desiredCapacity),
      instance_types_spot: cdktf.listMapper(cdktf.stringToTerraform)(this._instanceTypesSpot),
      maintenance: cdktf.stringToTerraform(this._maintenance),
      max_size: cdktf.numberToTerraform(this._maxSize),
      min_size: cdktf.numberToTerraform(this._minSize),
      name: cdktf.stringToTerraform(this._name),
      product: cdktf.stringToTerraform(this._product),
      region: cdktf.stringToTerraform(this._region),
      deployment_preferences: elastigroupAwsBeanstalkDeploymentPreferencesToTerraform(this._deploymentPreferences.internalValue),
      managed_actions: elastigroupAwsBeanstalkManagedActionsToTerraform(this._managedActions.internalValue),
      scheduled_task: cdktf.listMapper(elastigroupAwsBeanstalkScheduledTaskToTerraform)(this._scheduledTask),
    };
  }
}

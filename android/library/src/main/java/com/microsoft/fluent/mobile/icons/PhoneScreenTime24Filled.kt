package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PhoneScreenTime24: ImageVector
  get() {
    if (_phoneScreenTime24 != null) {
      return _phoneScreenTime24!!
    }
    _phoneScreenTime24 = fluentIcon(name = "Filled.PhoneScreenTime24", 24f) {
      materialPath {
          moveTo(17.5F, 12.0F)
          curveToRelative(3.038F, 0.0F, 5.5F, 2.462F, 5.5F, 5.5F)
          reflectiveCurveTo(20.538F, 23.0F, 17.5F, 23.0F)
          reflectiveCurveTo(12.0F, 20.538F, 12.0F, 17.5F)
          reflectiveCurveToRelative(2.462F, -5.5F, 5.5F, -5.5F)
          close()
          moveTo(13.75F, 2.0F)
          curveTo(14.993F, 2.0F, 16.0F, 3.007F, 16.0F, 4.25F)
          verticalLineToRelative(6.924F)
          curveToRelative(-2.867F, 0.677F, -5.0F, 3.252F, -5.0F, 6.326F)
          curveToRelative(0.0F, 0.168F, 0.006F, 0.335F, 0.019F, 0.5F)
          horizontalLineTo(8.75F)
          curveTo(8.336F, 18.0F, 8.0F, 18.336F, 8.0F, 18.75F)
          curveToRelative(0.0F, 0.38F, 0.282F, 0.694F, 0.648F, 0.743F)
          lineTo(8.75F, 19.5F)
          horizontalLineToRelative(2.5F)
          lineToRelative(0.062F, -0.003F)
          curveToRelative(0.306F, 0.948F, 0.824F, 1.802F, 1.498F, 2.504F)
          lineTo(6.25F, 22.0F)
          curveTo(5.007F, 22.0F, 4.0F, 20.993F, 4.0F, 19.75F)
          verticalLineTo(4.25F)
          curveTo(4.0F, 3.007F, 5.007F, 2.0F, 6.25F, 2.0F)
          horizontalLineToRelative(7.5F)
          close()
          moveToRelative(2.75F, 12.0F)
          curveToRelative(-0.276F, 0.0F, -0.5F, 0.224F, -0.5F, 0.5F)
          verticalLineToRelative(4.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineToRelative(3.002F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveToRelative(-0.224F, -0.5F, -0.5F, -0.5F)
          horizontalLineTo(17.0F)
          verticalLineToRelative(-3.5F)
          curveToRelative(0.0F, -0.276F, -0.224F, -0.5F, -0.5F, -0.5F)
          close()        
      }
    }
    return _phoneScreenTime24!!
  }

private var _phoneScreenTime24: ImageVector? = null

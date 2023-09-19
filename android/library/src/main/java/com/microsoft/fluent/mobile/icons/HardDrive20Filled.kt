package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.HardDrive20: ImageVector
  get() {
    if (_hardDrive20 != null) {
      return _hardDrive20!!
    }
    _hardDrive20 = fluentIcon(name = "Filled.HardDrive20", 20f) {
      materialPath {
          moveTo(4.0F, 10.0F)
          curveToRelative(-0.588F, 0.0F, -1.136F, 0.169F, -1.599F, 0.461F)
          lineToRelative(2.25F, -5.249F)
          curveTo(4.966F, 4.477F, 5.689F, 4.0F, 6.489F, 4.0F)
          horizontalLineToRelative(7.104F)
          curveToRelative(0.742F, 0.0F, 1.43F, 0.41F, 1.763F, 1.088F)
          curveToRelative(0.544F, 1.106F, 1.53F, 3.207F, 2.333F, 5.432F)
          curveTo(17.208F, 10.192F, 16.626F, 10.0F, 16.0F, 10.0F)
          horizontalLineTo(4.0F)
          close()
          moveToRelative(12.0F, 1.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(1.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(3.987F)
          curveTo(2.888F, 15.993F, 2.0F, 15.1F, 2.0F, 14.0F)
          verticalLineToRelative(-1.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(12.0F)
          close()
          moveToRelative(-0.5F, 3.25F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          reflectiveCurveToRelative(-0.75F, 0.336F, -0.75F, 0.75F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          close()        
      }
    }
    return _hardDrive20!!
  }

private var _hardDrive20: ImageVector? = null

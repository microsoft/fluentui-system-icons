package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DoorArrowLeft24: ImageVector
  get() {
    if (_doorArrowLeft24 != null) {
      return _doorArrowLeft24!!
    }
    _doorArrowLeft24 = fluentIcon(name = "Filled.DoorArrowLeft24", 24f) {
      materialPath {
          moveTo(6.25F, 2.75F)
          curveToRelative(-0.828F, 0.0F, -1.5F, 0.672F, -1.5F, 1.5F)
          verticalLineToRelative(15.5F)
          curveToRelative(0.0F, 0.828F, 0.672F, 1.5F, 1.5F, 1.5F)
          horizontalLineToRelative(5.94F)
          curveTo(11.44F, 20.19F, 11.0F, 18.897F, 11.0F, 17.5F)
          curveToRelative(0.0F, -3.59F, 2.91F, -6.5F, 6.5F, -6.5F)
          curveToRelative(0.606F, 0.0F, 1.193F, 0.083F, 1.75F, 0.238F)
          verticalLineTo(4.25F)
          curveToRelative(0.0F, -0.828F, -0.672F, -1.5F, -1.5F, -1.5F)
          horizontalLineTo(6.25F)
          close()
          moveToRelative(2.25F, 10.5F)
          curveToRelative(-0.828F, 0.0F, -1.5F, -0.672F, -1.5F, -1.5F)
          reflectiveCurveToRelative(0.672F, -1.5F, 1.5F, -1.5F)
          reflectiveCurveToRelative(1.5F, 0.672F, 1.5F, 1.5F)
          reflectiveCurveToRelative(-0.672F, 1.5F, -1.5F, 1.5F)
          close()
          moveToRelative(9.0F, 9.75F)
          curveToRelative(3.038F, 0.0F, 5.5F, -2.462F, 5.5F, -5.5F)
          reflectiveCurveTo(20.538F, 12.0F, 17.5F, 12.0F)
          reflectiveCurveTo(12.0F, 14.462F, 12.0F, 17.5F)
          reflectiveCurveToRelative(2.462F, 5.5F, 5.5F, 5.5F)
          close()
          moveToRelative(3.5F, -5.5F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          horizontalLineToRelative(-4.793F)
          lineToRelative(1.647F, 1.646F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          lineToRelative(-2.5F, -2.5F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(2.5F, -2.5F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          lineTo(15.707F, 17.0F)
          horizontalLineTo(20.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          close()        
      }
    }
    return _doorArrowLeft24!!
  }

private var _doorArrowLeft24: ImageVector? = null

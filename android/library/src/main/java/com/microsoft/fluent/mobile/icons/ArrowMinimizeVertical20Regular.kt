package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowMinimizeVertical20: ImageVector
  get() {
    if (_arrowMinimizeVertical20 != null) {
      return _arrowMinimizeVertical20!!
    }
    _arrowMinimizeVertical20 = fluentIcon(name = "Regular.ArrowMinimizeVertical20", 20f) {
      materialPath {
          moveTo(9.5F, 1.0F)
          curveTo(9.776F, 1.0F, 10.0F, 1.224F, 10.0F, 1.5F)
          verticalLineToRelative(3.793F)
          lineToRelative(1.146F, -1.147F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(-2.0F, 2.0F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.707F, 0.0F)
          lineToRelative(-2.0F, -2.0F)
          curveToRelative(-0.196F, -0.196F, -0.196F, -0.512F, 0.0F, -0.708F)
          curveToRelative(0.195F, -0.195F, 0.511F, -0.195F, 0.707F, 0.0F)
          lineTo(9.0F, 5.293F)
          verticalLineTo(1.5F)
          curveTo(9.0F, 1.224F, 9.224F, 1.0F, 9.5F, 1.0F)
          close()
          moveToRelative(-6.0F, 8.5F)
          curveTo(3.5F, 9.224F, 3.724F, 9.0F, 4.0F, 9.0F)
          horizontalLineToRelative(11.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(15.276F, 10.0F, 15.0F, 10.0F)
          horizontalLineTo(4.0F)
          curveToRelative(-0.276F, 0.0F, -0.5F, -0.224F, -0.5F, -0.5F)
          close()
          moveToRelative(6.5F, 4.207F)
          verticalLineTo(17.5F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          reflectiveCurveTo(9.0F, 17.776F, 9.0F, 17.5F)
          verticalLineToRelative(-3.793F)
          lineToRelative(-1.146F, 1.147F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(2.0F, -2.0F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.707F, 0.0F)
          lineToRelative(2.0F, 2.0F)
          curveToRelative(0.196F, 0.196F, 0.196F, 0.512F, 0.0F, 0.708F)
          curveToRelative(-0.195F, 0.195F, -0.511F, 0.195F, -0.707F, 0.0F)
          lineTo(10.0F, 13.707F)
          close()        
      }
    }
    return _arrowMinimizeVertical20!!
  }

private var _arrowMinimizeVertical20: ImageVector? = null

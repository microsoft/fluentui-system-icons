package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.DesktopCursor16: ImageVector
  get() {
    if (_desktopCursor16 != null) {
      return _desktopCursor16!!
    }
    _desktopCursor16 = fluentIcon(name = "Regular.DesktopCursor16", 16f) {
      materialPath {
          moveTo(4.0F, 2.0F)
          curveTo(2.895F, 2.0F, 2.0F, 2.895F, 2.0F, 4.0F)
          verticalLineToRelative(5.997F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(2.005F)
          verticalLineToRelative(1.011F)
          horizontalLineTo(4.506F)
          curveToRelative(-0.276F, 0.0F, -0.5F, 0.224F, -0.5F, 0.5F)
          reflectiveCurveToRelative(0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineTo(8.0F)
          verticalLineToRelative(-1.0F)
          horizontalLineTo(7.006F)
          verticalLineToRelative(-1.01F)
          horizontalLineToRelative(0.996F)
          verticalLineToRelative(-1.0F)
          horizontalLineTo(4.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(5.973F)
          lineToRelative(0.82F, 0.854F)
          curveToRelative(0.116F, -0.253F, 0.18F, -0.534F, 0.18F, -0.83F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(4.0F)
          close()
          moveToRelative(5.864F, 6.153F)
          curveTo(9.722F, 8.006F, 9.506F, 7.96F, 9.316F, 8.036F)
          curveTo(9.127F, 8.112F, 9.003F, 8.296F, 9.003F, 8.5F)
          lineTo(9.0F, 14.502F)
          curveToRelative(0.0F, 0.217F, 0.14F, 0.41F, 0.347F, 0.476F)
          curveToRelative(0.206F, 0.067F, 0.433F, -0.008F, 0.56F, -0.184F)
          lineToRelative(1.37F, -1.908F)
          lineToRelative(2.398F, 0.559F)
          curveToRelative(0.216F, 0.05F, 0.44F, -0.047F, 0.548F, -0.24F)
          curveToRelative(0.11F, -0.192F, 0.08F, -0.434F, -0.074F, -0.594F)
          lineTo(9.864F, 8.153F)
          close()        
      }
    }
    return _desktopCursor16!!
  }

private var _desktopCursor16: ImageVector? = null

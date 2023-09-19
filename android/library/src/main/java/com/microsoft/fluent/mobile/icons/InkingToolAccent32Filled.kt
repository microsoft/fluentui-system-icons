package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.InkingToolAccent32: ImageVector
  get() {
    if (_inkingToolAccent32 != null) {
      return _inkingToolAccent32!!
    }
    _inkingToolAccent32 = fluentIcon(name = "Filled.InkingToolAccent32", 32f) {
      materialPath {
          moveTo(3.0F, 4.0F)
          horizontalLineToRelative(26.0F)
          verticalLineToRelative(4.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineToRelative(-5.0F)
          curveToRelative(0.0F, 0.15F, -0.034F, 0.303F, -0.106F, 0.447F)
          lineToRelative(-5.0F, 10.0F)
          curveToRelative(-0.247F, 0.494F, -0.847F, 0.694F, -1.341F, 0.447F)
          curveToRelative(-0.494F, -0.247F, -0.694F, -0.847F, -0.447F, -1.341F)
          lineTo(20.882F, 9.0F)
          horizontalLineTo(4.0F)
          curveTo(3.448F, 9.0F, 3.0F, 8.552F, 3.0F, 8.0F)
          verticalLineTo(4.0F)
          close()
          moveToRelative(14.857F, 21.875F)
          curveToRelative(0.0F, 1.864F, -0.863F, 3.375F, -1.928F, 3.375F)
          curveToRelative(-1.066F, 0.0F, -1.929F, -1.511F, -1.929F, -3.375F)
          reflectiveCurveToRelative(0.864F, -3.375F, 1.929F, -3.375F)
          reflectiveCurveToRelative(1.928F, 1.511F, 1.928F, 3.375F)
          close()        
      }
    }
    return _inkingToolAccent32!!
  }

private var _inkingToolAccent32: ImageVector? = null

package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Chat16: ImageVector
  get() {
    if (_chat16 != null) {
      return _chat16!!
    }
    _chat16 = fluentIcon(name = "Filled.Chat16", 16f) {
      materialPath {
          moveTo(8.0F, 2.0F)
          curveTo(4.686F, 2.0F, 2.0F, 4.686F, 2.0F, 8.0F)
          curveToRelative(0.0F, 1.04F, 0.265F, 2.019F, 0.73F, 2.872F)
          lineToRelative(-0.71F, 2.49F)
          curveToRelative(-0.052F, 0.179F, 0.0F, 0.37F, 0.134F, 0.5F)
          curveToRelative(0.134F, 0.127F, 0.328F, 0.171F, 0.504F, 0.112F)
          lineToRelative(2.338F, -0.779F)
          curveTo(5.88F, 13.707F, 6.906F, 14.0F, 8.0F, 14.0F)
          curveToRelative(3.314F, 0.0F, 6.0F, -2.686F, 6.0F, -6.0F)
          reflectiveCurveToRelative(-2.686F, -6.0F, -6.0F, -6.0F)
          close()
          moveTo(6.0F, 7.0F)
          curveToRelative(0.0F, -0.276F, 0.224F, -0.5F, 0.5F, -0.5F)
          horizontalLineToRelative(3.0F)
          curveTo(9.776F, 6.5F, 10.0F, 6.724F, 10.0F, 7.0F)
          reflectiveCurveTo(9.776F, 7.5F, 9.5F, 7.5F)
          horizontalLineToRelative(-3.0F)
          curveTo(6.224F, 7.5F, 6.0F, 7.276F, 6.0F, 7.0F)
          close()
          moveToRelative(0.5F, 1.5F)
          horizontalLineToRelative(2.0F)
          curveTo(8.776F, 8.5F, 9.0F, 8.724F, 9.0F, 9.0F)
          reflectiveCurveTo(8.776F, 9.5F, 8.5F, 9.5F)
          horizontalLineToRelative(-2.0F)
          curveTo(6.224F, 9.5F, 6.0F, 9.276F, 6.0F, 9.0F)
          reflectiveCurveToRelative(0.224F, -0.5F, 0.5F, -0.5F)
          close()        
      }
    }
    return _chat16!!
  }

private var _chat16: ImageVector? = null

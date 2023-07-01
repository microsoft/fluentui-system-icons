package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Autosum24: ImageVector
  get() {
    if (_autosum24 != null) {
      return _autosum24!!
    }
    _autosum24 = fluentIcon(name = "Filled.Autosum24", 24f) {
      materialPath {
          moveTo(4.83F, 4.61F)
          curveTo(4.985F, 4.24F, 5.347F, 4.0F, 5.75F, 4.0F)
          horizontalLineToRelative(12.5F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          reflectiveCurveToRelative(-0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(8.11F)
          lineToRelative(4.95F, 5.115F)
          curveToRelative(0.358F, 0.371F, 0.376F, 0.954F, 0.04F, 1.346F)
          lineTo(7.924F, 18.5F)
          horizontalLineTo(18.25F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          reflectiveCurveToRelative(-0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(5.75F)
          curveToRelative(-0.39F, 0.0F, -0.745F, -0.227F, -0.909F, -0.582F)
          curveToRelative(-0.163F, -0.355F, -0.104F, -0.772F, 0.15F, -1.069F)
          lineToRelative(5.998F, -6.998F)
          lineTo(5.03F, 5.695F)
          curveTo(4.752F, 5.407F, 4.673F, 4.98F, 4.83F, 4.61F)
          close()        
      }
    }
    return _autosum24!!
  }

private var _autosum24: ImageVector? = null

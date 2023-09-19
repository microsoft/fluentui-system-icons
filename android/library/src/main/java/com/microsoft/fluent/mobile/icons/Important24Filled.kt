package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Important24: ImageVector
  get() {
    if (_important24 != null) {
      return _important24!!
    }
    _important24 = fluentIcon(name = "Filled.Important24", 24f) {
      materialPath {
          moveTo(12.0F, 2.002F)
          curveToRelative(-2.14F, 0.0F, -3.875F, 1.735F, -3.875F, 3.875F)
          curveToRelative(0.0F, 2.92F, 1.207F, 6.552F, 1.813F, 8.199F)
          curveToRelative(0.323F, 0.878F, 1.159F, 1.423F, 2.064F, 1.423F)
          curveToRelative(0.904F, 0.0F, 1.739F, -0.542F, 2.063F, -1.418F)
          curveToRelative(0.606F, -1.64F, 1.81F, -5.254F, 1.81F, -8.204F)
          curveToRelative(0.0F, -2.14F, -1.734F, -3.875F, -3.875F, -3.875F)
          close()
          moveToRelative(0.001F, 14.999F)
          curveToRelative(-1.381F, 0.0F, -2.501F, 1.12F, -2.501F, 2.501F)
          curveToRelative(0.0F, 1.381F, 1.12F, 2.501F, 2.501F, 2.501F)
          curveToRelative(1.382F, 0.0F, 2.501F, -1.12F, 2.501F, -2.5F)
          curveToRelative(0.0F, -1.382F, -1.12F, -2.502F, -2.5F, -2.502F)
          close()        
      }
    }
    return _important24!!
  }

private var _important24: ImageVector? = null

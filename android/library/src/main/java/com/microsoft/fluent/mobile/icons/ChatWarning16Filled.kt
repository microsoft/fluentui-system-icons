package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ChatWarning16: ImageVector
  get() {
    if (_chatWarning16 != null) {
      return _chatWarning16!!
    }
    _chatWarning16 = fluentIcon(name = "Filled.ChatWarning16", 16f) {
      materialPath {
          moveTo(2.0F, 8.0F)
          curveToRelative(0.0F, -3.314F, 2.686F, -6.0F, 6.0F, -6.0F)
          reflectiveCurveToRelative(6.0F, 2.686F, 6.0F, 6.0F)
          reflectiveCurveToRelative(-2.686F, 6.0F, -6.0F, 6.0F)
          curveToRelative(-1.094F, 0.0F, -2.12F, -0.293F, -3.004F, -0.805F)
          lineToRelative(-2.338F, 0.78F)
          curveToRelative(-0.176F, 0.058F, -0.37F, 0.014F, -0.504F, -0.114F)
          reflectiveCurveToRelative(-0.186F, -0.32F, -0.135F, -0.498F)
          lineToRelative(0.712F, -2.491F)
          curveTo(2.265F, 10.019F, 2.0F, 9.04F, 2.0F, 8.0F)
          close()
          moveToRelative(6.75F, 2.75F)
          curveTo(8.75F, 10.336F, 8.414F, 10.0F, 8.0F, 10.0F)
          reflectiveCurveToRelative(-0.75F, 0.336F, -0.75F, 0.75F)
          reflectiveCurveTo(7.586F, 11.5F, 8.0F, 11.5F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          close()
          moveTo(8.492F, 4.91F)
          curveTo(8.45F, 4.677F, 8.245F, 4.5F, 8.0F, 4.5F)
          curveTo(7.724F, 4.5F, 7.5F, 4.724F, 7.5F, 5.0F)
          verticalLineToRelative(3.5F)
          lineToRelative(0.008F, 0.09F)
          curveTo(7.55F, 8.823F, 7.755F, 9.0F, 8.0F, 9.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineTo(5.0F)
          lineTo(8.492F, 4.91F)
          close()        
      }
    }
    return _chatWarning16!!
  }

private var _chatWarning16: ImageVector? = null

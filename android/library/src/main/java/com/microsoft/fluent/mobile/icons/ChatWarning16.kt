package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ChatWarning16: ImageVector
  get() {
    if (_chatWarning16 != null) {
      return _chatWarning16!!
    }
    _chatWarning16 = fluentIcon(name = "Regular.ChatWarning16", 16f) {
      materialPath {
          moveTo(8.75F, 10.75F)
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
          moveTo(3.0F, 8.0F)
          curveToRelative(0.0F, -2.761F, 2.239F, -5.0F, 5.0F, -5.0F)
          reflectiveCurveToRelative(5.0F, 2.239F, 5.0F, 5.0F)
          reflectiveCurveToRelative(-2.239F, 5.0F, -5.0F, 5.0F)
          curveToRelative(-0.985F, 0.0F, -1.902F, -0.284F, -2.675F, -0.775F)
          curveToRelative(-0.127F, -0.08F, -0.283F, -0.1F, -0.426F, -0.052F)
          lineToRelative(-1.658F, 0.553F)
          lineToRelative(0.51F, -1.781F)
          curveToRelative(0.037F, -0.133F, 0.018F, -0.275F, -0.052F, -0.393F)
          curveTo(3.255F, 9.805F, 3.0F, 8.933F, 3.0F, 8.0F)
          close()        
      }
    }
    return _chatWarning16!!
  }

private var _chatWarning16: ImageVector? = null

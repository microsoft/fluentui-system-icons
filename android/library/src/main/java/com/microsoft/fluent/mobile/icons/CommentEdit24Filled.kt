package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CommentEdit24: ImageVector
  get() {
    if (_commentEdit24 != null) {
      return _commentEdit24!!
    }
    _commentEdit24 = fluentIcon(name = "Filled.CommentEdit24", 24f) {
      materialPath {
          moveTo(2.0F, 6.25F)
          curveTo(2.0F, 4.455F, 3.455F, 3.0F, 5.25F, 3.0F)
          horizontalLineToRelative(13.5F)
          curveTo(20.545F, 3.0F, 22.0F, 4.455F, 22.0F, 6.25F)
          verticalLineToRelative(4.674F)
          curveToRelative(-1.286F, -1.245F, -3.337F, -1.232F, -4.607F, 0.038F)
          lineToRelative(-5.903F, 5.903F)
          curveToRelative(-0.472F, 0.472F, -0.807F, 1.064F, -0.97F, 1.712F)
          lineToRelative(-0.394F, 1.578F)
          lineTo(8.0F, 21.75F)
          curveToRelative(-0.824F, 0.618F, -2.0F, 0.03F, -2.0F, -1.0F)
          verticalLineTo(18.0F)
          horizontalLineTo(5.25F)
          curveTo(3.455F, 18.0F, 2.0F, 16.545F, 2.0F, 14.75F)
          verticalLineToRelative(-8.5F)
          close()
          moveToRelative(16.1F, 5.42F)
          lineToRelative(-5.903F, 5.902F)
          curveToRelative(-0.344F, 0.344F, -0.588F, 0.775F, -0.706F, 1.247F)
          lineToRelative(-0.458F, 1.831F)
          curveToRelative(-0.199F, 0.796F, 0.523F, 1.517F, 1.319F, 1.318F)
          lineToRelative(1.83F, -0.457F)
          curveToRelative(0.473F, -0.118F, 0.904F, -0.363F, 1.248F, -0.707F)
          lineToRelative(5.902F, -5.902F)
          curveToRelative(0.893F, -0.893F, 0.893F, -2.34F, 0.0F, -3.232F)
          curveToRelative(-0.892F, -0.893F, -2.34F, -0.893F, -3.232F, 0.0F)
          close()        
      }
    }
    return _commentEdit24!!
  }

private var _commentEdit24: ImageVector? = null

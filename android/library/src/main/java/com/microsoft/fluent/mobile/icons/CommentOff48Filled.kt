package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CommentOff48: ImageVector
  get() {
    if (_commentOff48 != null) {
      return _commentOff48!!
    }
    _commentOff48 = fluentIcon(name = "Filled.CommentOff48", 48f) {
      materialPath {
          moveTo(34.232F, 36.0F)
          lineToRelative(7.634F, 7.634F)
          curveToRelative(0.488F, 0.488F, 1.28F, 0.488F, 1.768F, 0.0F)
          reflectiveCurveToRelative(0.488F, -1.28F, 0.0F, -1.768F)
          lineToRelative(-37.5F, -37.5F)
          curveToRelative(-0.488F, -0.488F, -1.28F, -0.488F, -1.768F, 0.0F)
          reflectiveCurveToRelative(-0.488F, 1.28F, 0.0F, 1.768F)
          lineToRelative(1.875F, 1.875F)
          curveTo(4.86F, 9.329F, 4.0F, 11.189F, 4.0F, 13.25F)
          verticalLineToRelative(15.5F)
          curveTo(4.0F, 32.754F, 7.246F, 36.0F, 11.25F, 36.0F)
          horizontalLineTo(12.0F)
          verticalLineToRelative(5.82F)
          curveToRelative(0.0F, 1.824F, 2.057F, 2.89F, 3.547F, 1.838F)
          lineTo(26.398F, 36.0F)
          horizontalLineToRelative(7.835F)
          close()
          moveTo(11.303F, 6.0F)
          lineTo(40.35F, 35.045F)
          curveToRelative(2.18F, -1.25F, 3.65F, -3.6F, 3.65F, -6.295F)
          verticalLineToRelative(-15.5F)
          curveTo(44.0F, 9.246F, 40.754F, 6.0F, 36.75F, 6.0F)
          horizontalLineTo(11.303F)
          close()        
      }
    }
    return _commentOff48!!
  }

private var _commentOff48: ImageVector? = null

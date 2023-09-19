package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CommentOff16: ImageVector
  get() {
    if (_commentOff16 != null) {
      return _commentOff16!!
    }
    _commentOff16 = fluentIcon(name = "Regular.CommentOff16", 16f) {
      materialPath {
          moveTo(11.293F, 12.0F)
          lineToRelative(2.853F, 2.854F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-13.0F, -13.0F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(0.739F, 0.738F)
          curveTo(1.343F, 3.05F, 1.0F, 3.735F, 1.0F, 4.5F)
          verticalLineToRelative(5.0F)
          curveTo(1.0F, 10.88F, 2.12F, 12.0F, 3.5F, 12.0F)
          horizontalLineTo(4.0F)
          verticalLineToRelative(1.942F)
          curveToRelative(0.0F, 0.842F, 0.992F, 1.292F, 1.625F, 0.738F)
          lineTo(8.688F, 12.0F)
          horizontalLineToRelative(2.605F)
          close()
          moveToRelative(-1.0F, -1.0F)
          horizontalLineToRelative(-1.98F)
          lineTo(5.0F, 13.898F)
          verticalLineTo(11.0F)
          horizontalLineTo(3.5F)
          curveTo(2.672F, 11.0F, 2.0F, 10.328F, 2.0F, 9.5F)
          verticalLineToRelative(-5.0F)
          curveToRelative(0.0F, -0.489F, 0.234F, -0.923F, 0.596F, -1.197F)
          lineTo(10.293F, 11.0F)
          close()
          moveTo(14.0F, 9.5F)
          curveToRelative(0.0F, 0.643F, -0.405F, 1.192F, -0.974F, 1.405F)
          lineToRelative(0.747F, 0.747F)
          curveTo(14.508F, 11.216F, 15.0F, 10.416F, 15.0F, 9.5F)
          verticalLineToRelative(-5.0F)
          curveTo(15.0F, 3.12F, 13.88F, 2.0F, 12.5F, 2.0F)
          horizontalLineTo(4.121F)
          lineToRelative(1.0F, 1.0F)
          horizontalLineTo(12.5F)
          curveTo(13.328F, 3.0F, 14.0F, 3.672F, 14.0F, 4.5F)
          verticalLineToRelative(5.0F)
          close()        
      }
    }
    return _commentOff16!!
  }

private var _commentOff16: ImageVector? = null

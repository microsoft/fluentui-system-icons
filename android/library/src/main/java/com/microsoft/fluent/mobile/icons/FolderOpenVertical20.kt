package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.FolderOpenVertical20: ImageVector
  get() {
    if (_folderOpenVertical20 != null) {
      return _folderOpenVertical20!!
    }
    _folderOpenVertical20 = fluentIcon(name = "Regular.FolderOpenVertical20", 20f) {
      materialPath {
          moveTo(4.0F, 3.5F)
          curveTo(4.0F, 2.672F, 4.672F, 2.0F, 5.5F, 2.0F)
          horizontalLineToRelative(9.0F)
          curveTo(15.328F, 2.0F, 16.0F, 2.672F, 16.0F, 3.5F)
          verticalLineToRelative(3.877F)
          curveToRelative(0.0F, 0.123F, -0.015F, 0.245F, -0.045F, 0.364F)
          lineTo(15.0F, 11.56F)
          verticalLineToRelative(2.94F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineTo(12.0F)
          verticalLineToRelative(0.742F)
          curveToRelative(0.0F, 1.054F, -1.057F, 1.779F, -2.04F, 1.4F)
          lineTo(5.6F, 16.46F)
          curveTo(4.636F, 16.088F, 4.0F, 15.161F, 4.0F, 14.128F)
          verticalLineTo(3.5F)
          close()
          moveTo(7.186F, 3.0F)
          lineTo(10.4F, 4.24F)
          curveTo(11.364F, 4.612F, 12.0F, 5.539F, 12.0F, 6.572F)
          verticalLineTo(15.0F)
          horizontalLineToRelative(1.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-3.0F)
          curveToRelative(0.0F, -0.04F, 0.005F, -0.082F, 0.015F, -0.121F)
          lineToRelative(0.97F, -3.88F)
          curveTo(14.995F, 7.458F, 15.0F, 7.417F, 15.0F, 7.376F)
          verticalLineTo(3.5F)
          curveTo(15.0F, 3.224F, 14.776F, 3.0F, 14.5F, 3.0F)
          horizontalLineTo(7.186F)
          close()
          moveTo(5.0F, 3.958F)
          verticalLineToRelative(10.17F)
          curveToRelative(0.0F, 0.62F, 0.382F, 1.176F, 0.96F, 1.4F)
          lineToRelative(4.36F, 1.681F)
          curveToRelative(0.328F, 0.126F, 0.68F, -0.115F, 0.68F, -0.466F)
          verticalLineTo(6.572F)
          curveToRelative(0.0F, -0.62F, -0.382F, -1.177F, -0.96F, -1.4F)
          lineTo(5.68F, 3.49F)
          curveTo(5.352F, 3.365F, 5.0F, 3.606F, 5.0F, 3.957F)
          close()        
      }
    }
    return _folderOpenVertical20!!
  }

private var _folderOpenVertical20: ImageVector? = null

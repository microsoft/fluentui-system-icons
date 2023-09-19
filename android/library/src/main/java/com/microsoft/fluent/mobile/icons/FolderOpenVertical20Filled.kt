package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.FolderOpenVertical20: ImageVector
  get() {
    if (_folderOpenVertical20 != null) {
      return _folderOpenVertical20!!
    }
    _folderOpenVertical20 = fluentIcon(name = "Filled.FolderOpenVertical20", 20f) {
      materialPath {
          moveTo(4.137F, 2.873F)
          curveTo(4.049F, 3.063F, 4.0F, 3.276F, 4.0F, 3.5F)
          verticalLineToRelative(10.628F)
          curveToRelative(0.0F, 1.033F, 0.636F, 1.96F, 1.6F, 2.332F)
          lineToRelative(4.36F, 1.682F)
          curveToRelative(0.355F, 0.137F, 0.72F, 0.13F, 1.04F, 0.015F)
          verticalLineTo(6.568F)
          curveToRelative(0.0F, -0.619F, -0.38F, -1.174F, -0.956F, -1.398F)
          lineTo(4.137F, 2.873F)
          close()
          moveTo(4.935F, 2.11F)
          lineToRelative(5.471F, 2.128F)
          curveTo(11.367F, 4.612F, 12.0F, 5.538F, 12.0F, 6.568F)
          verticalLineTo(16.0F)
          horizontalLineToRelative(1.5F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-2.938F)
          lineToRelative(0.955F, -3.821F)
          curveTo(15.985F, 7.62F, 16.0F, 7.5F, 16.0F, 7.377F)
          verticalLineTo(3.5F)
          curveTo(16.0F, 2.672F, 15.328F, 2.0F, 14.5F, 2.0F)
          horizontalLineToRelative(-9.0F)
          curveTo(5.3F, 2.0F, 5.109F, 2.04F, 4.934F, 2.11F)
          close()        
      }
    }
    return _folderOpenVertical20!!
  }

private var _folderOpenVertical20: ImageVector? = null
